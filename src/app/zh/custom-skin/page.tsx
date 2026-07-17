import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { CustomSkinPageView } from "@/views/custom-skin-page";

export const metadata = createPageMetadata("zh", "customSkin", "/custom-skin");

export default function ChineseCustomSkinPage() {
  setRequestLocale("zh");
  return <CustomSkinPageView />;
}
