import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { PrivacyPageView } from "@/views/legal-pages";

export const metadata = createPageMetadata("en", "privacy", "/privacy");

export default function PrivacyPage() {
  setRequestLocale("en");
  return <PrivacyPageView />;
}
