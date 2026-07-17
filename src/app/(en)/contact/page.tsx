import { setRequestLocale } from "next-intl/server";

import { createPageMetadata } from "@/i18n/metadata";
import { ContactPageView } from "@/views/contact-page";

export const metadata = createPageMetadata("en", "contact", "/contact");

export default function ContactPage() {
  setRequestLocale("en");
  return <ContactPageView />;
}
