import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { OrderCancelPageView } from "@/views/order-pages";

export const metadata = createPageMetadata("en", "orderCancel", "/order/cancel", { index: false });

export default function OrderCancelPage() {
  setRequestLocale("en");
  return <OrderCancelPageView />;
}
