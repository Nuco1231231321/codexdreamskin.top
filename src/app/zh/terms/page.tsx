import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { TermsPageView } from "@/views/legal-pages";

export const metadata = createPageMetadata("zh", "terms", "/terms");

export default function ChineseTermsPage() {
  setRequestLocale("zh");
  return <TermsPageView />;
}
