import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { OrderSuccessPageView } from "@/views/order-pages";

export const metadata = createPageMetadata("en", "orderSuccess", "/order/success", { index: false });

export default function OrderSuccessPage() {
  setRequestLocale("en");
  return <OrderSuccessPageView />;
}
