import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { CustomSkinPageView } from "@/views/custom-skin-page";

export const metadata = createPageMetadata("en", "customSkin", "/custom-skin");

export default function CustomSkinPage() {
  setRequestLocale("en");
  return <CustomSkinPageView />;
}
