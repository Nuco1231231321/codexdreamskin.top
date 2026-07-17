import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { OrderCancelPageView } from "@/views/order-pages";

export const metadata = createPageMetadata("zh", "orderCancel", "/order/cancel", { index: false });

export default function ChineseOrderCancelPage() {
  setRequestLocale("zh");
  return <OrderCancelPageView />;
}
