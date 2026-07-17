import {
  Check,
  ClockCountdown,
  DownloadSimple,
  ImageSquare,
  PaintBrush,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { CheckoutButton } from "@/components/checkout-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type ProcessStep = { title: string; body: string };
type FaqItem = { question: string; answer: string };

const processIcons = [ShieldCheck, ImageSquare, Wrench, DownloadSimple];

export function CustomSkinPageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("CustomSkin");
  const boundaryItems = t.raw("boundary.items") as string[];
  const freeFeatures = t.raw("pricing.free.features") as string[];
  const quickFeatures = t.raw("pricing.quick.features") as string[];
  const customFeatures = t.raw("pricing.custom.features") as string[];
  const processSteps = t.raw("process.steps") as ProcessStep[];
  const sourceParagraphs = t.raw("sourceImage.paragraphs") as string[];
  const faq = t.raw("faq") as FaqItem[];
  const pageUrl = `https://codexdreamskin.top${localizePath("/custom-skin", locale)}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("pricing.custom.name"),
    provider: {
      "@type": "Organization",
      name: "Codex Dream Skin",
      url: "https://codexdreamskin.top",
    },
    areaServed: "Worldwide",
    serviceType: t("schemaServiceType"),
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    offers: [
      { "@type": "Offer", name: "Skin Quick Setup", price: "4.99", priceCurrency: "USD", url: pageUrl },
      { "@type": "Offer", name: "Custom Skin Early Access", price: "9.99", priceCurrency: "USD", url: pageUrl },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />
      <SiteHeader ctaHref="#pricing" ctaLabel={t("headerCta")} />
      <main>
        <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-black uppercase text-link">{t("hero.eyebrow")}</p>
            <h1 className="mt-4 max-w-[14ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-[58ch] text-pretty text-lg font-semibold leading-8 text-charcoal">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">
                {t("hero.compare")}
              </a>
              <Link href={localizePath("/#install", locale)} className="button-secondary inline-flex min-h-14 items-center justify-center px-6 font-black">
                {t("hero.freeGuide")}
              </Link>
            </div>
          </div>

          <div className="rounded-xl border-2 border-graphite border-b-[8px] bg-eel-light p-6 sm:p-8">
            <PaintBrush aria-hidden="true" className="size-12 text-link" weight="fill" />
            <h2 className="mt-5 text-balance text-3xl font-black text-eel-dark-blue">{t("boundary.title")}</h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">{t("boundary.description")}</p>
            <div className="mt-6 grid gap-3 text-sm font-extrabold text-eel-dark-blue sm:grid-cols-2">
              {boundaryItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-5 shrink-0 text-link" weight="bold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("pricing.title")}</h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">{t("pricing.description")}</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article className="flex flex-col rounded-xl border-2 border-graphite border-b-[7px] bg-white p-6">
                <p className="text-sm font-black uppercase text-link">{t("pricing.free.eyebrow")}</p>
                <h3 className="mt-2 text-3xl font-black text-eel-dark-blue">{t("pricing.free.name")}</h3>
                <p className="mt-3 text-pretty leading-7 text-charcoal">{t("pricing.free.description")}</p>
                <FeatureList features={freeFeatures} />
                <Link href={localizePath("/#install", locale)} className="button-secondary mt-auto inline-flex min-h-14 items-center justify-center px-5 font-black">
                  {t("pricing.free.cta")}
                </Link>
              </article>

              <article className="flex flex-col rounded-xl border-2 border-graphite border-b-[7px] bg-white p-6">
                <p className="text-sm font-black uppercase text-link">{t("pricing.quick.eyebrow")}</p>
                <h3 className="mt-2 text-balance text-3xl font-black text-eel-dark-blue">{t("pricing.quick.name")}</h3>
                <p className="mt-3 text-4xl font-black tabular-nums text-eel-dark-blue">$4.99</p>
                <p className="mt-3 text-pretty leading-7 text-charcoal">{t("pricing.quick.description")}</p>
                <FeatureList features={quickFeatures} />
                <CheckoutButton productSlug="skin-quick-setup" label={t("pricing.quick.cta")} className="mt-7" />
              </article>

              <article className="flex flex-col rounded-xl border-2 border-action-dark border-b-[7px] bg-eel-light p-6">
                <p className="text-sm font-black uppercase text-link">{t("pricing.custom.eyebrow")}</p>
                <h3 className="mt-2 text-balance text-3xl font-black text-eel-dark-blue">{t("pricing.custom.name")}</h3>
                <p className="mt-3 text-4xl font-black tabular-nums text-eel-dark-blue">$9.99</p>
                <p className="mt-3 text-pretty leading-7 text-charcoal">{t("pricing.custom.description")}</p>
                <FeatureList features={customFeatures} />
                <CheckoutButton productSlug="custom-skin-early-access" label={t("pricing.custom.cta")} className="mt-7" />
              </article>
            </div>

            <p className="mt-6 text-pretty text-sm font-bold leading-6 text-ash">{t("pricing.note")}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="max-w-[18ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("process.title")}</h2>
          <div className="mt-10 grid border-y-2 border-graphite md:grid-cols-4">
            {processSteps.map((step, index) => {
              const StepIcon = processIcons[index];
              return (
                <article key={step.title} className={`py-7 md:px-6 ${index < 3 ? "border-b-2 border-eel-light md:border-r-2 md:border-b-0" : ""}`}>
                  <StepIcon aria-hidden="true" className="size-9 text-action" weight="fill" />
                  <h3 className="mt-4 text-xl font-black text-eel-dark-blue">{step.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{step.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:py-24">
            <div>
              <ClockCountdown aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("sourceImage.title")}</h2>
            </div>
            <div className="grid gap-5 text-pretty text-lg leading-8 text-charcoal">
              {sourceParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("faqTitle")}</h2>
          <div className="mt-9 grid gap-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-xl border-2 border-graphite bg-white p-5 sm:p-6">
                <summary className="cursor-pointer text-lg font-black text-eel-dark-blue">{item.question}</summary>
                <p className="mt-4 text-pretty leading-7 text-charcoal">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 text-sm font-bold leading-6 text-charcoal">
      {features.map((feature) => (
        <li key={feature} className="flex gap-2">
          <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-link" weight="bold" />
          {feature}
        </li>
      ))}
    </ul>
  );
}
