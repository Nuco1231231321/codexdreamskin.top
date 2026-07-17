import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { AboutPageView } from "@/views/about-page";

export const metadata = createPageMetadata("zh", "about", "/about");

export default function ChineseAboutPage() {
  setRequestLocale("zh");
  return <AboutPageView />;
}
