"use client";

import { openCookieSettings } from "@/components/consent-banner";
import { useTranslations } from "next-intl";

export function CookieSettingsButton() {
  const t = useTranslations("Common.footer");

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-link underline decoration-2 underline-offset-4"
    >
      {t("cookieSettings")}
    </button>
  );
}
