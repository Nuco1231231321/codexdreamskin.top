import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { TermsPageView } from "@/views/legal-pages";

export const metadata = createPageMetadata("en", "terms", "/terms");

export default function TermsPage() {
  setRequestLocale("en");
  return <TermsPageView />;
}
