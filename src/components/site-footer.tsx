import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { CookieSettingsButton } from "@/components/cookie-settings-button";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

export function SiteFooter() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Common.footer");
  const footerLinks = [
    [t("install"), localizePath("/#install", locale)],
    [t("pets"), localizePath("/codex-pets", locale)],
    [t("customSkin"), localizePath("/custom-skin", locale)],
    [t("about"), localizePath("/about", locale)],
    [t("contact"), localizePath("/contact", locale)],
    [t("privacy"), localizePath("/privacy", locale)],
    [t("terms"), localizePath("/terms", locale)],
    [t("refund"), localizePath("/refund-policy", locale)],
  ];

  return (
    <footer className="border-t-2 border-graphite">
      <div className="mx-auto grid max-w-[1200px] gap-7 px-4 py-9 text-sm font-bold text-charcoal sm:px-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="max-w-[58ch] text-pretty leading-6">
            {t("disclaimer")}
          </p>
          <p className="mt-2 text-xs font-bold text-ash">© 2026 codexdreamskin.top</p>
        </div>
        <nav
          aria-label={t("navigationLabel")}
          className="grid gap-x-6 gap-y-3 sm:grid-cols-3"
        >
          {footerLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-link underline decoration-2 underline-offset-4"
            >
              {label}
            </Link>
          ))}
          <CookieSettingsButton />
        </nav>
      </div>
    </footer>
  );
}
