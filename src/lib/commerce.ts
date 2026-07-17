export const commerceFunctionsBase =
  "https://hnzzmujsudrxczgkjyij.supabase.co/functions/v1";

export type ProductSlug =
  | "skin-quick-setup"
  | "custom-skin-early-access";

export const serviceProducts = {
  "skin-quick-setup": {
    name: "Skin Quick Setup",
    price: "$4.99",
    delivery: "Within 72 hours",
  },
  "custom-skin-early-access": {
    name: "Custom Skin Early Access",
    price: "$9.99",
    delivery: "Within 72 hours",
  },
} satisfies Record<
  ProductSlug,
  { name: string; price: string; delivery: string }
>;

