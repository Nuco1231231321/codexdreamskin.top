import { Palette } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type SiteHeaderProps = {
  ctaHref: string;
  ctaLabel: string;
};

export function SiteHeader({ ctaHref, ctaLabel }: SiteHeaderProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Common");
  const navigationItems = [
    [t("nav.install"), localizePath("/#install", locale)],
    [t("nav.pets"), localizePath("/codex-pets", locale)],
    [t("nav.customSkin"), localizePath("/custom-skin", locale)],
    [t("nav.safety"), localizePath("/#safety", locale)],
    [t("nav.contact"), localizePath("/contact", locale)],
  ];

  return (
    <header className="sticky top-0 z-30 border-b-2 border-eel-light bg-white/95">
      <nav
        aria-label={t("navigationLabel")}
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href={localizePath("/", locale)}
          aria-label={t("brandHome")}
          className="flex shrink-0 items-center gap-2 font-black text-eel-dark-blue"
        >
          <span className="grid size-10 place-items-center rounded-xl border-2 border-action bg-eel-light">
            <Palette aria-hidden="true" className="size-6" weight="fill" />
          </span>
          <span className="hidden text-lg sm:inline">codex dream skin</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm font-extrabold text-charcoal lg:flex">
          {navigationItems.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-link">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Link
            href={localizePath(ctaHref, locale)}
            className="button-primary inline-flex min-h-11 items-center justify-center px-3 text-sm font-black sm:px-4"
          >
            {ctaLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
