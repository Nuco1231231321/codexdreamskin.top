import { corsHeaders, jsonResponse } from "../_shared/http.ts";
import {
  checkoutMatchesReturn,
  queryValue,
  retrieveCheckout,
  savePaidCheckout,
  supabaseAdmin,
} from "../_shared/creem.ts";

const validPlatforms = new Set(["macos", "windows"]);
const validDirections = new Set([
  "soft",
  "dark",
  "bright",
  "minimal",
  "surprise-me",
]);
const allowedImageTypes = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/heic",
  "image/heif",
]);
const maximumImageBytes = 15 * 1024 * 1024;

function safeFileName(fileName: string) {
  const normalized = fileName
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
  return normalized || "reference-image";
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, { error: "Method not allowed" }, 405);
  }

  let uploadedPath: string | null = null;

  try {
    const form = await request.formData();
    const rawQuery = String(form.get("raw_query") ?? "");
    const platform = String(form.get("platform") ?? "");
    const visualDirection = String(form.get("visual_direction") ?? "");
    const accentColor = String(form.get("accent_color") ?? "").trim();
    const notes = String(form.get("notes") ?? "").trim();
    const rightsConfirmed = form.get("rights_confirmed") === "true";
    const image = form.get("image");

    if (!rawQuery) {
      return jsonResponse(request, { error: "This payment link is invalid" }, 401);
    }
    if (!validPlatforms.has(platform)) {
      return jsonResponse(request, { error: "Choose macOS or Windows" }, 400);
    }
    if (!validDirections.has(visualDirection)) {
      return jsonResponse(request, { error: "Choose a visual direction" }, 400);
    }
    if (!rightsConfirmed) {
      return jsonResponse(
        request,
        { error: "Confirm that you may use the uploaded image" },
        400,
      );
    }
    if (notes.length > 1200) {
      return jsonResponse(request, { error: "Notes must be 1,200 characters or less" }, 400);
    }

    const checkoutId = queryValue(rawQuery, "checkout_id");
    if (!checkoutId) {
      return jsonResponse(request, { error: "Checkout ID is missing" }, 400);
    }

    const checkout = await retrieveCheckout(checkoutId);
    if (!(await checkoutMatchesReturn(rawQuery, checkout))) {
      return jsonResponse(request, { error: "This payment link is invalid" }, 401);
    }
    const order = await savePaidCheckout(checkout);
    const requiresImage = order.product_slug === "custom-skin-early-access";

    if (requiresImage && !(image instanceof File && image.size > 0)) {
      return jsonResponse(
        request,
        { error: "Upload the image you want used for your custom skin" },
        400,
      );
    }

    if (image instanceof File && image.size > 0) {
      if (!allowedImageTypes.has(image.type)) {
        return jsonResponse(
          request,
          { error: "Use a PNG, JPEG, WebP, HEIC, or HEIF image" },
          400,
        );
      }
      if (image.size > maximumImageBytes) {
        return jsonResponse(request, { error: "Image must be 15 MB or smaller" }, 400);
      }

      uploadedPath = `${order.creem_order_id}/${crypto.randomUUID()}-${safeFileName(image.name)}`;
      const { error: uploadError } = await supabaseAdmin()
        .storage
        .from("custom-orders")
        .upload(uploadedPath, image, {
          contentType: image.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(`Image upload failed: ${uploadError.message}`);
      }
    }

    const { data: brief, error: briefError } = await supabaseAdmin()
      .from("skin_briefs")
      .insert({
        order_id: order.id,
        product_slug: order.product_slug,
        platform,
        visual_direction: visualDirection,
        accent_color: accentColor || null,
        image_path: uploadedPath,
        notes: notes || null,
        rights_confirmed: true,
      })
      .select("id, submitted_at")
      .single();

    if (briefError) {
      if (uploadedPath) {
        await supabaseAdmin().storage.from("custom-orders").remove([uploadedPath]);
      }

      if (briefError.code === "23505") {
        return jsonResponse(
          request,
          { error: "This order already has a submitted brief" },
          409,
        );
      }
      throw new Error(`Brief persistence failed: ${briefError.message}`);
    }

    return jsonResponse(request, {
      submitted: true,
      brief_reference: brief.id.slice(0, 8),
      submitted_at: brief.submitted_at,
      delivery_window: "within 72 hours",
    });
  } catch (error) {
    console.error(error);
    if (uploadedPath) {
      await supabaseAdmin().storage.from("custom-orders").remove([uploadedPath]);
    }
    return jsonResponse(
      request,
      { error: "Your brief could not be submitted. Please try again." },
      500,
    );
  }
});
