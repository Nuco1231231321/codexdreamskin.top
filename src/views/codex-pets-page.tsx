import {
  ArrowDown,
  ArrowSquareOut,
  CheckCircle,
  PawPrint,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { PetBuilderGuide } from "@/components/pet-builder-guide";
import { PetPicker } from "@/components/pet-picker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { codexPets } from "@/lib/pets";

type ContentItem = { title: string; body: string };
type FaqItem = { question: string; answer: string };
type XGalleryCopy = { alt: string; title: string };

const heroImages = [
  { src: "/pet-gallery/spinach.webp?v=20260716-gallery", width: 192, height: 208 },
  { src: "/pet-gallery/mojo-apple.webp?v=20260716-gallery", width: 192, height: 208 },
  { src: "/pet-gallery/aegis-sentinel.webp?v=20260716-gallery", width: 192, height: 208 },
];

const xGallerySources = [
  { src: "/x-gallery/x-henri-codex-pets.jpg", handle: "@henricreates", href: "https://x.com/henricreates/status/2067962064304230410" },
  { src: "/x-gallery/x-xiaohu-petdex.jpg", handle: "@xiaohu", href: "https://x.com/xiaohu/status/2052021728763637915" },
  { src: "/x-gallery/x-ji10me-custom-pet.jpg", handle: "@ji10me", href: "https://x.com/ji10me/status/2050475112248516625" },
  { src: "/x-gallery/x-codex-pet-hub.jpg", handle: "@ikSkpcotion", href: "https://x.com/ikSkpcotion/status/2077308043042439563" },
  { src: "/x-gallery/x-apple-watch-pets.jpg", handle: "@b_nnett", href: "https://x.com/b_nnett/status/2058629022632808496" },
];

export function CodexPetsPageView() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Pets");
  const meta = useTranslations("Metadata.pets");
  const heroImageAlts = t.raw("hero.imageAlts") as string[];
  const howSteps = t.raw("how.steps") as ContentItem[];
  const definitionParagraphs = t.raw("definition.paragraphs") as string[];
  const xGalleryCopy = t.raw("xGallery.items") as XGalleryCopy[];
  const safetyItems = t.raw("safety.items") as string[];
  const faq = t.raw("faq") as FaqItem[];
  const pagePath = localizePath("/codex-pets", locale);
  const pageUrl = `https://codexdreamskin.top${pagePath}`;
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta("title"),
    url: pageUrl,
    description: meta("description"),
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: codexPets.length,
      itemListElement: codexPets.map((pet, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: pet.name,
        url: `${pageUrl}#${pet.slug}`,
      })),
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionJsonLd, faqJsonLd]) }} />
      <SiteHeader ctaHref="#pet-gallery" ctaLabel={t("headerCta")} />

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1200px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-link">{t("hero.eyebrow")}</p>
            <h1 className="max-w-[17ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl lg:text-[56px]">{t("hero.title")}</h1>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg font-semibold leading-8 text-charcoal">{t("hero.description")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pet-gallery" className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black">
                {t("hero.choose")}
                <ArrowDown aria-hidden="true" className="size-5" weight="bold" />
              </a>
              <a href="#create-codex-pet" className="button-secondary inline-flex min-h-14 items-center justify-center px-6 font-black">{t("hero.make")}</a>
            </div>
          </div>

          <div aria-label={t("hero.previewAria")} className="grid grid-cols-[1.1fr_0.9fr] items-center gap-4">
            {heroImages.map((image, index) => (
              <div key={image.src} className={index === 0 ? "row-span-2 grid min-h-[380px] place-items-center rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6" : `grid min-h-[182px] place-items-center rounded-xl border-2 border-graphite border-b-[6px] ${index === 1 ? "bg-[#f7fbf4]" : "bg-[#edf9ff]"} p-4`}>
                <Image src={image.src} alt={heroImageAlts[index]} width={image.width} height={image.height} preload={index === 0} sizes={index === 0 ? "(max-width: 1024px) 45vw, 280px" : "(max-width: 1024px) 36vw, 180px"} className={index === 0 ? "h-auto w-full max-w-[280px] object-contain" : "max-h-[150px] w-auto object-contain"} />
              </div>
            ))}
          </div>
        </section>

        <section id="how-pets-work" className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
            <div>
              <h2 className="max-w-[17ch] text-balance text-4xl font-black text-link sm:text-5xl">{t("how.title")}</h2>
              <p className="mt-4 max-w-[54ch] text-pretty text-lg leading-8 text-charcoal">{t("how.description")}</p>
            </div>
            <ol className="border-y-2 border-graphite">
              {howSteps.map((step, index) => (
                <li key={step.title} className={`grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 ${index < howSteps.length - 1 ? "border-b-2 border-eel-light" : ""}`}>
                  <span className="grid size-11 place-items-center rounded-xl border-2 border-action bg-eel-light font-black tabular-nums text-eel-dark-blue">{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black text-eel-dark-blue">{step.title}</h3>
                    <p className="mt-2 text-pretty leading-7 text-charcoal">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pet-gallery" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("gallery.title")}</h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">{t("gallery.description")}</p>
          </div>
          <PetPicker />
          <p className="mt-6 text-pretty text-xs font-bold leading-5 text-ash">{t("gallery.rights")}</p>
        </section>

        <PetBuilderGuide />

        <section className="border-b-2 border-eel-light bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
            <div><h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("versions.title")}</h2></div>
            <div className="grid gap-6 text-pretty text-lg leading-8 text-charcoal sm:grid-cols-2">
              <div className="border-l-[6px] border-action pl-5">
                <h3 className="text-2xl font-black text-eel-dark-blue">{t("versions.v2Title")}</h3>
                <p className="mt-3">{t("versions.v2Body")}</p>
              </div>
              <div className="border-l-[6px] border-link pl-5">
                <h3 className="text-2xl font-black text-eel-dark-blue">{t("versions.v1Title")}</h3>
                <p className="mt-3">{t("versions.v1Body")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-eel-light bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
            <div>
              <PawPrint aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("definition.title")}</h2>
            </div>
            <div className="grid gap-5 text-pretty text-lg leading-8 text-charcoal">
              {definitionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <h2 className="max-w-[17ch] text-balance text-4xl font-black text-link sm:text-5xl">{t("xGallery.title")}</h2>
            <p className="mt-4 max-w-[68ch] text-pretty text-lg leading-8 text-charcoal">{t("xGallery.description")}</p>
          </div>
          <div className="mx-auto mt-10 flex max-w-[1320px] snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:px-6">
            {xGallerySources.map((source, index) => (
              <figure key={source.src} className="w-[84vw] max-w-[560px] shrink-0 snap-center rounded-xl border-2 border-graphite border-b-[6px] bg-white p-2 sm:w-[56vw]">
                <div className="grid h-[340px] place-items-center overflow-hidden rounded-xl bg-[#f7fbf4]">
                  <Image src={source.src} alt={xGalleryCopy[index].alt} width={1120} height={619} sizes="(max-width: 640px) 84vw, 56vw" className="h-full w-full object-contain" />
                </div>
                <figcaption className="grid gap-2 p-3 sm:p-4">
                  <h3 className="text-xl font-black text-eel-dark-blue">{xGalleryCopy[index].title}</h3>
                  <p className="text-sm font-bold text-ash">{t("xGallery.postedBy", { handle: source.handle })}</p>
                  <a href={source.href} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
                    {t("xGallery.view")}
                    <ArrowSquareOut aria-hidden="true" className="size-4" weight="bold" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto max-w-[1200px] px-4 text-xs font-bold leading-5 text-ash sm:px-6">{t("xGallery.rights")}</p>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <ShieldCheck aria-hidden="true" className="size-12 text-action" weight="fill" />
                <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">{t("safety.title")}</h2>
                <p className="mt-5 text-pretty leading-7 text-charcoal">{t("safety.description")}</p>
              </div>
              <div className="grid gap-4">
                {safetyItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border-2 border-graphite bg-white p-4">
                    <CheckCircle aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-action" weight="fill" />
                    <p className="text-pretty font-bold leading-7 text-charcoal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:py-24">
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
      </main>
      <SiteFooter />
    </>
  );
}
