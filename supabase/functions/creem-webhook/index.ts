import { createClient } from "npm:@supabase/supabase-js@2";

function requiredEnvironment(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function hexToBytes(hex: string) {
  if (!/^[a-f0-9]{64}$/i.test(hex)) return null;
  return new Uint8Array(
    hex.match(/.{2}/g)?.map((pair) => Number.parseInt(pair, 16)) ?? [],
  );
}

async function verifySignature(body: string, signature: string) {
  const signatureBytes = hexToBytes(signature);
  if (!signatureBytes) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(requiredEnvironment("CREEM_WEBHOOK_SECRET")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );

  return crypto.subtle.verify(
    "HMAC",
    key,
    signatureBytes,
    new TextEncoder().encode(body),
  );
}

function productSlugForId(productId: string) {
  if (productId === requiredEnvironment("CREEM_QUICK_PRODUCT_ID")) {
    return "skin-quick-setup";
  }
  if (productId === requiredEnvironment("CREEM_CUSTOM_PRODUCT_ID")) {
    return "custom-skin-early-access";
  }
  return null;
}

const supabase = createClient(
  requiredEnvironment("SUPABASE_URL"),
  requiredEnvironment("SUPABASE_SERVICE_ROLE_KEY"),
  { auth: { persistSession: false, autoRefreshToken: false } },
);

type WebhookOrder = {
  id?: string;
  product?: string;
  amount?: number;
  currency?: string;
  status?: string;
  created_at?: string;
  mode?: string;
};

type WebhookProduct = { id?: string };
type WebhookCustomer = { id?: string; email?: string; name?: string | null };
type WebhookObject = {
  id?: string;
  request_id?: string | null;
  mode?: string;
  order?: WebhookOrder;
  product?: WebhookProduct;
  customer?: WebhookCustomer;
  transaction?: { order?: string };
};

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("creem-signature") ?? "";
  if (!(await verifySignature(rawBody, signature))) {
    return new Response("Invalid signature", { status: 401 });
  }

  try {
    const event = JSON.parse(rawBody) as {
      id: string;
      eventType: string;
      object: WebhookObject;
    };

    const object = event.object;
    const orderObject = object.order;
    const orderId = orderObject?.id ?? object.transaction?.order ?? null;

    const { error: eventError } = await supabase.from("payment_events").insert({
      creem_event_id: event.id,
      event_type: event.eventType,
      creem_order_id: orderId,
      payload: event,
    });

    if (eventError?.code === "23505") {
      return new Response("Already processed", { status: 200 });
    }
    if (eventError) {
      throw new Error(`Event persistence failed: ${eventError.message}`);
    }

    if (event.eventType === "checkout.completed") {
      const product = object.product;
      const customer = object.customer;
      const productId = String(orderObject?.product ?? product?.id ?? "");
      const productSlug = productSlugForId(productId);

      if (!productSlug || orderObject?.status !== "paid" || !customer?.email) {
        return new Response("Ignored unconfigured checkout", { status: 200 });
      }

      const { error } = await supabase.from("orders").upsert(
        {
          creem_checkout_id: object.id,
          creem_order_id: orderObject.id,
          creem_customer_id: customer.id ?? null,
          creem_product_id: productId,
          request_id: object.request_id ?? null,
          product_slug: productSlug,
          customer_email: String(customer.email).toLowerCase(),
          customer_name: customer.name ?? null,
          amount: orderObject.amount,
          currency: orderObject.currency,
          payment_status: "paid",
          mode: object.mode ?? orderObject.mode ?? "test",
          paid_at: orderObject.created_at ?? new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "creem_order_id" },
      );
      if (error) throw new Error(`Order persistence failed: ${error.message}`);
    }

    if (event.eventType === "refund.created" && orderId) {
      const { error } = await supabase
        .from("orders")
        .update({ payment_status: "refunded", updated_at: new Date().toISOString() })
        .eq("creem_order_id", orderId);
      if (error) throw new Error(`Refund update failed: ${error.message}`);
    }

    if (event.eventType === "dispute.created" && orderId) {
      const { error } = await supabase
        .from("orders")
        .update({ payment_status: "disputed", updated_at: new Date().toISOString() })
        .eq("creem_order_id", orderId);
      if (error) throw new Error(`Dispute update failed: ${error.message}`);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Webhook processing failed", { status: 500 });
  }
});
