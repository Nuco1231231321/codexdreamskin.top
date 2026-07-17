import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { ContactPageView } from "@/views/contact-page";

export const metadata = createPageMetadata("zh", "contact", "/contact");

export default function ChineseContactPage() {
  setRequestLocale("zh");
  return <ContactPageView />;
}
