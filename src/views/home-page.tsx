import {
  ArrowDown,
  ImageSquare,
  Palette,
  PawPrint,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { InstallPanel } from "@/components/install-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";

type ContentItem = { title: string; body: string };
type FaqItem = { question: string; answer: string };

const petImages = [
  "/pets/spinach.webp",
  "/pets/nougat.webp",
  "/pets/maguang.webp",
  "/pets/mianmian.webp",
];

export function HomePageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Home");
  const meta = useTranslations("Metadata.home");
  const beforeRunItems = t.raw("beforeRun.items") as ContentItem[];
  const howItWorksSteps = t.raw("howItWorks.steps") as ContentItem[];
  const troubleshootingItems = t.raw("troubleshooting.items") as ContentItem[];
  const realInterfaceParagraphs = t.raw("realInterface.paragraphs") as string[];
  const readableThemeParagraphs = t.raw("readableTheme.paragraphs") as string[];
  const petImageAlts = t.raw("pets.imageAlts") as string[];
  const faq = t.raw("faq") as FaqItem[];
  const pageUrl = `https://codexdreamskin.top${localizePath("/", locale)}`;
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Codex Dream Skin",
    url: pageUrl,
    description: meta("description"),
    inLanguage: locale === "zh" ? "zh-CN" : "en",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, faqJsonLd]) }}
      />
      <SiteHeader ctaHref="#install" ctaLabel={t("headerCta")} />

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1200px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-link">{t("hero.eyebrow")}</p>
            <h1 className="max-w-[17ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl lg:text-[56px]">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg font-semibold leading-8 text-charcoal">{t("hero.description")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#install" className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                {t("hero.install")}
                <ArrowDown aria-hidden="true" className="size-5" weight="bold" />
              </a>
              <Link href={localizePath("/codex-pets", locale)} className="button-secondary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                <PawPrint aria-hidden="true" className="size-5" weight="fill" />
                {t("hero.pets")}
              </Link>
            </div>
          </div>

          <figure>
            <div className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] bg-[#f7fbf4] p-2 sm:p-3">
              <Image
                src="/screenshots/codex-dream-skin-macos-home-1000.webp"
                alt={t("hero.imageAlt")}
                width={1000}
                height={589}
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full rounded-xl border-2 border-eel-light"
              />
            </div>
            <figcaption className="mt-3 text-pretty text-xs font-bold leading-5 text-ash">{t("hero.caption")}</figcaption>
          </figure>
        </section>

        <section id="install" className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-link sm:text-5xl">{t("install.title")}</h2>
              <p className="mt-4 max-w-[66ch] text-pretty text-lg leading-8 text-charcoal">{t("install.description")}</p>
            </div>
            <InstallPanel />
          </div>
        </section>

        <section aria-labelledby="before-run-title" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 id="before-run-title" className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("beforeRun.title")}</h2>
          <div className="mt-10 grid border-y-2 border-graphite md:grid-cols-4">
            {beforeRunItems.map((item, index) => (
              <div key={item.title} className={`py-6 md:px-6 ${index < 3 ? "border-b-2 border-eel-light md:border-r-2 md:border-b-0" : ""}`}>
                <h3 className="text-xl font-black text-eel-dark-blue">{item.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8] py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <PawPrint aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 max-w-[16ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("pets.title")}</h2>
              <p className="mt-5 max-w-[56ch] text-pretty text-lg leading-8 text-charcoal">{t("pets.description")}</p>
              <Link href={localizePath("/codex-pets", locale)} className="button-primary mt-7 inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                {t("pets.cta")}
                <PawPrint aria-hidden="true" className="size-5" weight="fill" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {petImages.map((src, index) => (
                <div key={src} className="grid min-h-[190px] place-items-center rounded-xl border-2 border-graphite border-b-[6px] bg-white p-4">
                  <Image src={src} alt={petImageAlts[index]} width={192} height={208} sizes="(max-width: 1024px) 44vw, 240px" className="max-h-[160px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <figure className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] p-2">
              <Image src="/screenshots/codex-dream-skin-macos-task.webp" alt={t("realInterface.imageAlt")} width={1400} height={825} sizes="(max-width: 1024px) 100vw, 58vw" className="h-auto w-full rounded-xl" />
            </figure>
            <div className="lg:pt-10">
              <ImageSquare aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("realInterface.title")}</h2>
              {realInterfaceParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`${index === 0 ? "mt-5 text-lg leading-8" : "mt-4 leading-7"} text-pretty text-charcoal`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-link sm:text-5xl">{t("howItWorks.title")}</h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">{t("howItWorks.description")}</p>
            </div>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {howItWorksSteps.map((step) => (
                <article key={step.title} className="border-l-[6px] border-action pl-5">
                  <h3 className="text-2xl font-black text-eel-dark-blue">{step.title}</h3>
                  <p className="mt-3 text-pretty leading-7 text-charcoal">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <Palette aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("readableTheme.title")}</h2>
              {readableThemeParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={`${index === 0 ? "mt-5 text-lg leading-8" : "mt-4 leading-7"} text-pretty text-charcoal`}>{paragraph}</p>
              ))}
            </div>
            <figure>
              <div className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] p-2">
                <Image src="/screenshots/codex-dream-skin-windows.webp" alt={t("readableTheme.imageAlt")} width={1200} height={750} sizes="(max-width: 1024px) 100vw, 60vw" className="h-auto w-full rounded-xl" />
              </div>
              <figcaption className="mt-3 text-pretty text-xs font-bold leading-5 text-ash">{t("readableTheme.caption")}</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <Wrench aria-hidden="true" className="size-12 text-action" weight="fill" />
                <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("troubleshooting.title")}</h2>
                <p className="mt-5 text-pretty leading-7 text-charcoal">{t("troubleshooting.description")}</p>
              </div>
              <div className="grid gap-4">
                {troubleshootingItems.map((item) => (
                  <details key={item.title} className="rounded-xl border-2 border-graphite bg-white p-5">
                    <summary className="cursor-pointer text-lg font-black text-eel-dark-blue">{item.title}</summary>
                    <p className="mt-3 text-pretty leading-7 text-charcoal">{item.body}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Palette aria-hidden="true" className="size-12 text-link" weight="fill" />
              <h2 className="mt-5 max-w-[22ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("services.title")}</h2>
              <p className="mt-5 max-w-[70ch] text-pretty text-lg leading-8 text-charcoal">{t("services.description")}</p>
              <p className="mt-4 font-black text-eel-dark-blue">{t("services.prices")}</p>
            </div>
            <Link href={localizePath("/custom-skin", locale)} className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black">{t("services.cta")}</Link>
          </div>
        </section>

        <section id="safety" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
            <ShieldCheck aria-hidden="true" className="size-14 text-eel-dark-blue" weight="fill" />
            <div>
              <h2 className="text-balance text-3xl font-black text-eel-dark-blue sm:text-4xl">{t("safety.title")}</h2>
              <p className="mt-4 max-w-[75ch] text-pretty leading-7 text-eel-dark-blue">{t("safety.description")}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-balance text-center text-4xl font-black text-link sm:text-5xl">{t("faqTitle")}</h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-pretty text-center text-lg leading-8 text-charcoal">{t("faqIntro")}</p>
          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-xl border-2 border-graphite p-5 sm:p-6">
                <summary className="cursor-pointer text-lg font-black text-eel-dark-blue sm:text-xl">{item.question}</summary>
                <p className="mt-4 text-pretty leading-7 text-charcoal">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-balance text-3xl font-black text-eel-dark-blue sm:text-4xl">{t("checksum.title")}</h2>
                <p className="mt-4 max-w-[70ch] text-pretty leading-7 text-charcoal">{t("checksum.description")}</p>
                <code className="mt-4 block max-w-[76ch] break-all rounded-xl border-2 border-eel-light bg-white p-3 font-mono text-xs leading-5 text-eel-dark-blue">
                  2a54b8f7b6474b22587b7692395c76dd0fc9acce27007482f42df827ccb42251
                </code>
              </div>
              <a href="/downloads/codex-dream-skin-main.zip" download className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                {t("checksum.download")}
                <ArrowDown aria-hidden="true" className="size-5" weight="bold" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
