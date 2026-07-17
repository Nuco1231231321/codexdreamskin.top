import { ArrowLeft, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type ContactItem = { title: string; body: string };

export function ContactPageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Contact");
  const common = useTranslations("Common.nav");
  const items = t.raw("items") as ContactItem[];

  return (
    <>
      <SiteHeader ctaHref="/#install" ctaLabel={common("install")} />
      <main className="mx-auto min-h-[calc(100dvh-180px)] max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link
          href={localizePath("/", locale)}
          className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          {t("back")}
        </Link>
        <EnvelopeSimple aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        <h1 className="mt-5 text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl">{t("title")}</h1>
        <p className="mt-5 max-w-[65ch] text-pretty text-lg leading-8 text-charcoal">{t("intro")}</p>

        <div className="mt-12 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6 sm:p-8">
          <h2 className="text-balance text-3xl font-black text-eel-dark-blue">{t("emailTitle")}</h2>
          <a href="mailto:support@codexdreamskin.top" className="mt-4 inline-block break-all text-xl font-black text-link underline decoration-2 underline-offset-4">
            support@codexdreamskin.top
          </a>
          <p className="mt-5 text-pretty leading-7 text-charcoal">{t("emailBody")}</p>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-black text-eel-dark-blue">{t("includeTitle")}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <article key={item.title} className="rounded-xl border-2 border-graphite p-5">
                <ShieldCheck aria-hidden="true" className="size-8 text-action" weight="fill" />
                <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{item.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
