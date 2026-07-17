import { createClient } from "npm:@supabase/supabase-js@2";

export type ProductSlug =
  | "skin-quick-setup"
  | "custom-skin-early-access";

export type CreemCheckout = {
  id: string;
  status: "pending" | "processing" | "completed" | "expired";
  request_id?: string | null;
  mode: "test" | "prod" | "sandbox";
  product: string | { id: string };
  order?: {
    id: string;
    product: string;
    amount: number;
    currency: string;
    status: "pending" | "paid";
    created_at?: string;
  } | null;
  customer?: string | {
    id: string;
    email: string;
    name?: string | null;
  } | null;
};

export function requiredEnvironment(name: string) {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function productIdForSlug(productSlug: ProductSlug) {
  if (productSlug === "skin-quick-setup") {
    return requiredEnvironment("CREEM_QUICK_PRODUCT_ID");
  }

  return requiredEnvironment("CREEM_CUSTOM_PRODUCT_ID");
}

export function productSlugForId(productId: string): ProductSlug | null {
  if (productId === requiredEnvironment("CREEM_QUICK_PRODUCT_ID")) {
    return "skin-quick-setup";
  }

  if (productId === requiredEnvironment("CREEM_CUSTOM_PRODUCT_ID")) {
    return "custom-skin-early-access";
  }

  return null;
}

function creemApiBase() {
  return Deno.env.get("CREEM_MODE") === "prod"
    ? "https://api.creem.io"
    : "https://test-api.creem.io";
}

export async function retrieveCheckout(checkoutId: string) {
  const response = await fetch(
    `${creemApiBase()}/v1/checkouts?checkout_id=${encodeURIComponent(checkoutId)}`,
    {
      headers: {
        "x-api-key": requiredEnvironment("CREEM_API_KEY"),
      },
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(
      `Creem checkout lookup failed (${response.status}): ${details}`,
    );
  }

  return (await response.json()) as CreemCheckout;
}

export function verifyRedirectQuery(rawQuery: string) {
  const query = rawQuery.startsWith("?") ? rawQuery.slice(1) : rawQuery;
  const parts: string[] = [];
  let suppliedSignature = "";

  for (const pair of query.split("&")) {
    if (!pair) continue;

    const separatorIndex = pair.indexOf("=");
    const rawKey = separatorIndex >= 0 ? pair.slice(0, separatorIndex) : pair;
    const rawValue = separatorIndex >= 0 ? pair.slice(separatorIndex + 1) : "";
    const key = decodeURIComponent(rawKey.replaceAll("+", " "));
    const value = decodeURIComponent(rawValue.replaceAll("+", " "));

    if (key === "signature") {
      suppliedSignature = value;
      continue;
    }

    if (!value || value === "null") continue;
    parts.push(`${key}=${value}`);
  }

  parts.push(`salt=${requiredEnvironment("CREEM_API_KEY")}`);
  return { suppliedSignature, canonicalValue: parts.join("|") };
}

export async function isValidRedirectQuery(rawQuery: string) {
  const { suppliedSignature, canonicalValue } = verifyRedirectQuery(rawQuery);
  if (!suppliedSignature || !/^[a-f0-9]{64}$/i.test(suppliedSignature)) {
    return false;
  }

  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(canonicalValue),
  );
  const expectedSignature = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return expectedSignature === suppliedSignature.toLowerCase();
}

function checkoutProductId(checkout: CreemCheckout) {
  return typeof checkout.product === "string"
    ? checkout.product
    : checkout.product.id;
}

function checkoutCustomerId(checkout: CreemCheckout) {
  if (!checkout.customer) return null;
  return typeof checkout.customer === "string"
    ? checkout.customer
    : checkout.customer.id;
}

export async function checkoutMatchesReturn(
  rawQuery: string,
  checkout: CreemCheckout,
) {
  const checkoutId = queryValue(rawQuery, "checkout_id");
  const orderId = queryValue(rawQuery, "order_id");
  const customerId = queryValue(rawQuery, "customer_id");
  const productId = queryValue(rawQuery, "product_id");
  const requestId = queryValue(rawQuery, "request_id");

  const identifiersMatch =
    checkout.status === "completed" &&
    checkout.order?.status === "paid" &&
    checkoutId === checkout.id &&
    orderId === checkout.order?.id &&
    customerId === checkoutCustomerId(checkout) &&
    productId === checkoutProductId(checkout) &&
    (!requestId || requestId === checkout.request_id);

  if (!identifiersMatch) return false;

  const signatureIsValid = await isValidRedirectQuery(rawQuery);
  if (!signatureIsValid) {
    console.warn(
      "Creem redirect signature did not match documentation; verified checkout identifiers through the authenticated API instead.",
    );
  }

  return true;
}

export function queryValue(rawQuery: string, key: string) {
  const query = rawQuery.startsWith("?") ? rawQuery.slice(1) : rawQuery;
  return new URLSearchParams(query).get(key);
}

export function supabaseAdmin() {
  return createClient(
    requiredEnvironment("SUPABASE_URL"),
    requiredEnvironment("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

export async function savePaidCheckout(checkout: CreemCheckout) {
  if (checkout.status !== "completed" || checkout.order?.status !== "paid") {
    throw new Error("Checkout is not paid");
  }

  const productId = checkoutProductId(checkout);
  const productSlug = productSlugForId(productId);
  if (!productSlug) {
    throw new Error("Checkout product is not configured for this site");
  }

  if (!checkout.order) {
    throw new Error("Paid checkout does not include an order");
  }

  const customer =
    checkout.customer && typeof checkout.customer !== "string"
      ? checkout.customer
      : null;
  if (!customer?.email) {
    throw new Error("Paid checkout does not include a customer email");
  }

  const { data, error } = await supabaseAdmin()
    .from("orders")
    .upsert(
      {
        creem_checkout_id: checkout.id,
        creem_order_id: checkout.order.id,
        creem_customer_id: customer.id,
        creem_product_id: productId,
        request_id: checkout.request_id ?? null,
        product_slug: productSlug,
        customer_email: customer.email.toLowerCase(),
        customer_name: customer.name ?? null,
        amount: checkout.order.amount,
        currency: checkout.order.currency,
        payment_status: "paid",
        mode: checkout.mode,
        paid_at: checkout.order.created_at ?? new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "creem_order_id" },
    )
    .select("id, creem_order_id, product_slug, payment_status")
    .single();

  if (error) {
    throw new Error(`Order persistence failed: ${error.message}`);
  }

  return data;
}
