import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { OrderSuccessPageView } from "@/views/order-pages";

export const metadata = createPageMetadata("zh", "orderSuccess", "/order/success", { index: false });

export default function ChineseOrderSuccessPage() {
  setRequestLocale("zh");
  return <OrderSuccessPageView />;
}
