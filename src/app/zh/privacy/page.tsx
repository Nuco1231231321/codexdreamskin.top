import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { PrivacyPageView } from "@/views/legal-pages";

export const metadata = createPageMetadata("zh", "privacy", "/privacy");

export default function ChinesePrivacyPage() {
  setRequestLocale("zh");
  return <PrivacyPageView />;
}
