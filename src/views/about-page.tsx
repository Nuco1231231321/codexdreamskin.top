import { ArrowLeft, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type ContentCard = { title: string; body: string };

export function AboutPageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("About");
  const common = useTranslations("Common.nav");
  const cards = t.raw("provides") as ContentCard[];

  return (
    <>
      <SiteHeader ctaHref="/#install" ctaLabel={common("install")} />
      <main className="mx-auto min-h-[calc(100dvh-72px)] max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link
          href={localizePath("/", locale)}
          className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          {t("back")}
        </Link>
        <div className="mt-10 border-l-[7px] border-action pl-5 sm:pl-8">
          <h1 className="text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">{t("intro")}</p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-eel-dark-blue">{t("checkingTitle")}</h2>
          <p className="mt-4 text-pretty leading-7 text-charcoal">{t("checkingBody")}</p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-eel-dark-blue">{t("providesTitle")}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <article key={card.title} className="rounded-xl border-2 border-graphite border-b-[5px] p-5">
                <CheckCircle aria-hidden="true" className="size-8 text-action" weight="fill" />
                <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{card.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border-2 border-graphite border-b-[6px] bg-eel-light p-6 sm:p-8">
          <ShieldCheck aria-hidden="true" className="size-10 text-link" weight="fill" />
          <h2 className="mt-4 text-3xl font-black text-eel-dark-blue">{t("correctionsTitle")}</h2>
          <p className="mt-4 text-pretty leading-7 text-charcoal">{t("correctionsBody")}</p>
          <Link
            href={localizePath("/contact", locale)}
            className="button-primary mt-6 inline-flex min-h-12 items-center justify-center px-5 font-black"
          >
            {t("contact")}
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
