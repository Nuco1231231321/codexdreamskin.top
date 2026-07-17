"use client";

import { openCookieSettings } from "@/components/consent-banner";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-link underline decoration-2 underline-offset-4"
    >
      Cookie settings
    </button>
  );
}

