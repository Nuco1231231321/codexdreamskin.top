"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("Common.languageSwitcher");
  const targetLocale = locale === "zh" ? "en" : "zh";

  return (
    <Link
      href={switchLocalePath(pathname, locale)}
      hrefLang={targetLocale === "zh" ? "zh-Hans" : "en"}
      lang={targetLocale === "zh" ? "zh-CN" : "en"}
      aria-label={t("ariaLabel")}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-lingot-lime px-3 text-sm font-black text-link hover:border-action"
    >
      {t("shortLabel")}
    </Link>
  );
}
