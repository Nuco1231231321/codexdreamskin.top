import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { AboutPageView } from "@/views/about-page";

export const metadata = createPageMetadata("en", "about", "/about");

export default function AboutPage() {
  setRequestLocale("en");
  return <AboutPageView />;
}
