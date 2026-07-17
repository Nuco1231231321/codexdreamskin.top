import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { CodexPetsPageView } from "@/views/codex-pets-page";

export const metadata = createPageMetadata("zh", "pets", "/codex-pets");

export default function ChineseCodexPetsPage() {
  setRequestLocale("zh");
  return <CodexPetsPageView />;
}
