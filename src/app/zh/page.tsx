import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { HomePageView } from "@/views/home-page";

export const metadata = createPageMetadata("zh", "home", "/");

export default function ChineseHomePage() {
  setRequestLocale("zh");
  return <HomePageView />;
}
