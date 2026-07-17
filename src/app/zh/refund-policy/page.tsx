import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { RefundPolicyPageView } from "@/views/legal-pages";

export const metadata = createPageMetadata("zh", "refund", "/refund-policy");

export default function ChineseRefundPolicyPage() {
  setRequestLocale("zh");
  return <RefundPolicyPageView />;
}
