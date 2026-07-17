import {
  jsonResponse,
  corsHeaders,
} from "../_shared/http.ts";
import {
  productIdForSlug,
  requiredEnvironment,
  type ProductSlug,
} from "../_shared/creem.ts";

const validProducts = new Set<ProductSlug>([
  "skin-quick-setup",
  "custom-skin-early-access",
]);

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, { error: "Method not allowed" }, 405);
  }

  try {
    const body = (await request.json()) as { product_slug?: string };
    if (!body.product_slug || !validProducts.has(body.product_slug as ProductSlug)) {
      return jsonResponse(request, { error: "Choose a valid service" }, 400);
    }

    const productSlug = body.product_slug as ProductSlug;
    const productId = productIdForSlug(productSlug);
    const requestId = crypto.randomUUID();
    const apiBase = Deno.env.get("CREEM_MODE") === "prod"
      ? "https://api.creem.io"
      : "https://test-api.creem.io";

    const response = await fetch(`${apiBase}/v1/checkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": requiredEnvironment("CREEM_API_KEY"),
      },
      body: JSON.stringify({
        product_id: productId,
        request_id: requestId,
        success_url: "https://codexdreamskin.top/order/success",
        metadata: {
          product_slug: productSlug,
          source: "codexdreamskin.top",
        },
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Creem checkout creation failed", response.status, details);
      return jsonResponse(
        request,
        { error: "Checkout is temporarily unavailable. Please try again." },
        502,
      );
    }

    const checkout = (await response.json()) as {
      checkout_url?: string;
    };
    if (!checkout.checkout_url) {
      throw new Error("Creem response did not include checkout_url");
    }

    return jsonResponse(request, { checkout_url: checkout.checkout_url });
  } catch (error) {
    console.error(error);
    return jsonResponse(
      request,
      { error: "Checkout is temporarily unavailable. Please try again." },
      500,
    );
  }
});

