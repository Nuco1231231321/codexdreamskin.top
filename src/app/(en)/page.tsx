import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { HomePageView } from "@/views/home-page";

export const metadata = createPageMetadata("en", "home", "/");

export default function HomePage() {
  setRequestLocale("en");
  return <HomePageView />;
}
