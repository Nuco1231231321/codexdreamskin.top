import { ArrowLeft, Receipt, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type LegalSection = { title: string; body: string };
type LegalNamespace = "Privacy" | "Terms" | "Refund";

function LegalPage({ namespace }: { namespace: LegalNamespace }) {
  const locale = useLocale() as Locale;
  const t = useTranslations(namespace);
  const common = useTranslations("Common.nav");
  const sections = t.raw("sections") as LegalSection[];
  const backPath = namespace === "Refund" ? "/custom-skin" : "/";

  return (
    <>
      <SiteHeader ctaHref="/#install" ctaLabel={common("install")} />
      <main className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-20">
        <Link
          href={localizePath(backPath, locale)}
          className="inline-flex items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-5" weight="bold" />
          {t("back")}
        </Link>
        {namespace === "Privacy" ? (
          <ShieldCheck aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        ) : namespace === "Refund" ? (
          <Receipt aria-hidden="true" className="mt-10 size-14 text-action" weight="fill" />
        ) : null}
        <h1 className={`${namespace === "Terms" ? "mt-10" : "mt-5"} text-balance text-5xl font-black text-eel-dark-blue sm:text-6xl`}>
          {t("title")}
        </h1>
        <p className="mt-4 font-bold text-ash">{t("effective")}</p>
        <p className="mt-6 text-pretty text-lg leading-8 text-charcoal">{t("intro")}</p>

        <div className="mt-12 grid gap-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-eel-dark-blue">{section.title}</h2>
              <p className="mt-3 text-pretty leading-7 text-charcoal">{section.body}</p>
            </section>
          ))}
        </div>

        {namespace === "Privacy" || namespace === "Refund" ? (
          <Link
            href={localizePath("/contact", locale)}
            className="button-primary mt-12 inline-flex min-h-14 items-center justify-center px-6 font-black"
          >
            {t(namespace === "Privacy" ? "request" : "contact")}
          </Link>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}

export function PrivacyPageView() {
  return <LegalPage namespace="Privacy" />;
}

export function TermsPageView() {
  return <LegalPage namespace="Terms" />;
}

export function RefundPolicyPageView() {
  return <LegalPage namespace="Refund" />;
}
