import { corsHeaders, jsonResponse } from "../_shared/http.ts";
import {
  checkoutMatchesReturn,
  queryValue,
  retrieveCheckout,
  savePaidCheckout,
} from "../_shared/creem.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, { error: "Method not allowed" }, 405);
  }

  try {
    const body = (await request.json()) as { raw_query?: string };
    if (!body.raw_query) {
      return jsonResponse(request, { error: "This payment link is invalid" }, 401);
    }
    const checkoutId = queryValue(body.raw_query, "checkout_id");
    if (!checkoutId) {
      return jsonResponse(request, { error: "Checkout ID is missing" }, 400);
    }

    const checkout = await retrieveCheckout(checkoutId);
    if (!(await checkoutMatchesReturn(body.raw_query, checkout))) {
      return jsonResponse(request, { error: "This payment link is invalid" }, 401);
    }
    const order = await savePaidCheckout(checkout);

    return jsonResponse(request, {
      verified: true,
      product_slug: order.product_slug,
      order_reference: order.creem_order_id.slice(-8),
    });
  } catch (error) {
    console.error(error);
    return jsonResponse(
      request,
      {
        error:
          "Payment is still being confirmed. Wait a moment, then try again.",
      },
      409,
    );
  }
});
