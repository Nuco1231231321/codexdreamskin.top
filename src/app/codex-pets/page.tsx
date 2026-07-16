import {
  ArrowDown,
  ArrowSquareOut,
  CheckCircle,
  PawPrint,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";

import { PetPicker } from "@/components/pet-picker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { codexPets } from "@/lib/pets";

export const metadata: Metadata = {
  title: "Codex Pets: Free Desktop Pets for Codex",
  description:
    "Browse free Codex Pets, choose a desktop pet, open a prepared Codex install task, copy the CLI fallback, and review safety guidance before installation.",
  keywords: [
    "Codex Pets",
    "Codex pet",
    "desktop pets",
    "desktop pet",
    "free desktop pets",
    "Codex desktop pet",
    "how to get a desktop pet",
  ],
  alternates: {
    canonical: "/codex-pets",
  },
  openGraph: {
    type: "website",
    url: "/codex-pets",
    title: "Codex Pets: Free Desktop Pets for Codex",
    description:
      "Choose a Codex desktop pet, open a prepared install task, and keep a CLI fallback ready.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Codex Pets desktop pet gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codex Pets: Free Desktop Pets for Codex",
    description:
      "Browse a curated desktop pet gallery and open a prepared Codex installation task.",
    images: ["/opengraph-image"],
  },
};

const petFaqItems = [
  {
    question: "What are Codex Pets?",
    answer:
      "Codex Pets are small visual companions made to appear inside the Codex desktop experience. Each public pet listing has a name, creator, preview, and install slug. This page curates a small selection and prepares the published npx install command for the pet you choose.",
  },
  {
    question: "How do I get a desktop pet in Codex?",
    answer:
      "Choose a pet in the gallery and select Install in Codex. The link opens a new Codex task containing the command npx codex-pets add followed by the selected slug. Review the task and command before allowing Codex to run it. If the custom link does not open, copy the Terminal fallback instead.",
  },
  {
    question: "Are these free desktop pets?",
    answer:
      "The listed pets use the public Codex Pets installation flow and do not show a purchase price. Individual character, artwork, and brand rights still belong to their respective owners. Free access to an install package does not grant commercial reuse or redistribution rights.",
  },
  {
    question: "Are desktop pets safe?",
    answer:
      "A desktop pet is code and assets installed on your computer, so review the package source, command, and permissions before running it. Use a current Node.js and npm environment, avoid commands copied from unknown replies, and remove a pet if its behavior or resource use is unexpected.",
  },
  {
    question: "Do I need to upload an image or create an account?",
    answer:
      "No. This curated gallery does not accept uploads and does not require an account. Selecting a pet only changes the prepared install link and CLI command in your browser. Installation happens after you open Codex or run the command locally.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Codex Pets: Free Desktop Pets for Codex",
  url: "https://codexdreamskin.top/codex-pets",
  description:
    "A curated gallery of Codex desktop pets with prepared installation links and CLI commands.",
  inLanguage: "en",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: codexPets.length,
    itemListElement: codexPets.map((pet, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pet.name,
      url: `https://codexdreamskin.top/codex-pets#${pet.slug}`,
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: petFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const xGalleryItems = [
  {
    src: "/x-gallery/x-henri-codex-pets.jpg",
    alt: "Public X post showing Codex pets inside a desktop coding workflow",
    title: "Codex pets in a real workflow",
    handle: "@henricreates",
    href: "https://x.com/henricreates/status/2067962064304230410",
  },
  {
    src: "/x-gallery/x-xiaohu-petdex.jpg",
    alt: "Public X post showing a Petdex desktop pet experiment",
    title: "A Petdex-style experiment",
    handle: "@xiaohu",
    href: "https://x.com/xiaohu/status/2052021728763637915",
  },
  {
    src: "/x-gallery/x-ji10me-custom-pet.jpg",
    alt: "Public X post showing a custom pet beside Codex work",
    title: "A custom Codex companion",
    handle: "@ji10me",
    href: "https://x.com/ji10me/status/2050475112248516625",
  },
  {
    src: "/x-gallery/x-codex-pet-hub.jpg",
    alt: "Public X post showing a community Codex pet hub interface",
    title: "A community pet hub",
    handle: "@ikSkpcotion",
    href: "https://x.com/ikSkpcotion/status/2077308043042439563",
  },
  {
    src: "/x-gallery/x-apple-watch-pets.jpg",
    alt: "Public X post showing Codex pets adapted to an Apple Watch",
    title: "Codex pets on Apple Watch",
    handle: "@b_nnett",
    href: "https://x.com/b_nnett/status/2058629022632808496",
  },
];

export default function CodexPetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([collectionJsonLd, faqJsonLd]),
        }}
      />

      <SiteHeader ctaHref="#pet-gallery" ctaLabel="Choose a pet" />

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1200px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-12">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-link">
              Free desktop pets for Codex
            </p>
            <h1 className="max-w-[17ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl lg:text-[56px]">
              Install a Codex desktop pet in one click.
            </h1>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg font-semibold leading-8 text-charcoal">
              Choose a free desktop pet, open a prepared Codex task, and review
              the install command before it runs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pet-gallery"
                className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
              >
                Choose a pet
                <ArrowDown aria-hidden="true" className="size-5" weight="bold" />
              </a>
              <a
                href="#how-pets-work"
                className="button-secondary inline-flex min-h-14 items-center justify-center px-6 font-black"
              >
                How it works
              </a>
            </div>
          </div>

          <div
            aria-label="Codex pet preview collection"
            className="grid grid-cols-[1.1fr_0.9fr] items-center gap-4"
          >
            <div className="row-span-2 grid min-h-[380px] place-items-center rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6">
              <Image
                src="/pets/spinach.webp"
                alt="Spinach cream-gold cat Codex pet"
                width={192}
                height={208}
                preload
                sizes="(max-width: 1024px) 45vw, 280px"
                className="h-auto w-full max-w-[280px] object-contain"
              />
            </div>
            <div className="grid min-h-[182px] place-items-center rounded-xl border-2 border-graphite border-b-[6px] bg-[#f7fbf4] p-4">
              <Image
                src="/pets/mojo-apple.webp"
                alt="MOJO Apple Codex pet"
                width={192}
                height={208}
                sizes="(max-width: 1024px) 36vw, 180px"
                className="max-h-[150px] w-auto object-contain"
              />
            </div>
            <div className="grid min-h-[182px] place-items-center rounded-xl border-2 border-graphite border-b-[6px] bg-[#edf9ff] p-4">
              <Image
                src="/pets/aegis-sentinel.webp"
                alt="Aegis Sentinel Codex pet"
                width={192}
                height={208}
                sizes="(max-width: 1024px) 36vw, 180px"
                className="max-h-[150px] w-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="how-pets-work"
          className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]"
        >
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="max-w-[17ch] text-balance text-4xl font-black text-link sm:text-5xl">
              How to get a desktop pet in Codex
            </h2>
            <p className="mt-4 max-w-[68ch] text-pretty text-lg leading-8 text-charcoal">
              The shortest useful path has three parts: choose a public pet,
              open a prepared Codex task, then inspect the exact command before
              approving it. The website does not install software in the
              background and does not ask for access to your Codex account.
            </p>

            <div className="mt-10 grid border-y-2 border-graphite md:grid-cols-3">
              {[
                [
                  "Choose",
                  "Search by pet name, creator, or visual type. Selecting a card updates the large preview and its exact install slug.",
                ],
                [
                  "Open Codex",
                  "Install in Codex uses the registered codex:// link to open a new task with the published npx command already prepared.",
                ],
                [
                  "Review and run",
                  "Read the command before approval. If the custom link is unavailable, copy the same command and run it in a trusted terminal.",
                ],
              ].map(([title, body], index) => (
                <article
                  key={title}
                  className={`py-6 md:px-6 ${
                    index < 2
                      ? "border-b-2 border-eel-light md:border-r-2 md:border-b-0"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl font-black text-eel-dark-blue">
                    {title}
                  </h3>
                  <p className="mt-3 text-pretty leading-7 text-charcoal">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pet-gallery"
          className="scroll-mt-24 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24"
        >
          <div className="mb-10 max-w-3xl">
            <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
              Choose your Codex pet
            </h2>
            <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
              This launch collection includes animals, developer characters,
              fantasy mascots, and a playful object. Uploads are not enabled,
              so every option below can be reviewed before the install path is
              shown.
            </p>
          </div>
          <PetPicker />
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
            <div>
              <PawPrint
                aria-hidden="true"
                className="size-12 text-action"
                weight="fill"
              />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                What is a Codex desktop pet?
              </h2>
            </div>
            <div className="grid gap-5 text-pretty text-lg leading-8 text-charcoal">
              <p>
                A desktop pet is a small animated or illustrated companion that
                stays near your work instead of taking over the whole screen.
                Traditional desktop pets often walk across the desktop, react
                to clicks, or idle beside open windows. Codex Pets adapts that
                familiar idea to the Codex workflow by packaging a pet under a
                short install slug.
              </p>
              <p>
                The practical value is atmosphere, not productivity claims. A
                cat, dog, mascot, or developer character can make long coding
                sessions feel more personal, but it should not hide important
                controls or distract from review. Choose a design that remains
                recognizable at a small size and fits the way you use Codex.
              </p>
              <p>
                People searching for free desktop pets usually want three
                things: a preview before download, a simple installation path,
                and a clear way to remove or replace the pet. This page focuses
                on the first two today. The original pet page is linked from
                every selected item so you can inspect its public listing and
                any current package details.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <h2 className="max-w-[17ch] text-balance text-4xl font-black text-link sm:text-5xl">
              Codex pet ideas seen on X
            </h2>
            <p className="mt-4 max-w-[68ch] text-pretty text-lg leading-8 text-charcoal">
              Public experiments show the idea moving beyond one gallery: pets
              appear beside coding sessions, inside custom pet collections, and
              even on a watch-sized screen. These images are references to the
              linked public posts, not downloadable packs hosted by this site.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[1320px] snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:px-6">
            {xGalleryItems.map((item) => (
              <figure
                key={item.src}
                className="w-[84vw] max-w-[560px] shrink-0 snap-center rounded-xl border-2 border-graphite border-b-[6px] bg-white p-2 sm:w-[56vw]"
              >
                <div className="grid h-[340px] place-items-center overflow-hidden rounded-xl bg-[#f7fbf4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1120}
                    height={619}
                    sizes="(max-width: 640px) 84vw, 56vw"
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="grid gap-2 p-3 sm:p-4">
                  <h3 className="text-xl font-black text-eel-dark-blue">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-ash">Posted by {item.handle}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
                  >
                    View post on X
                    <ArrowSquareOut
                      aria-hidden="true"
                      className="size-4"
                      weight="bold"
                    />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto max-w-[1200px] px-4 text-xs font-bold leading-5 text-ash sm:px-6">
            Screenshots are shown for commentary and discovery. Rights remain
            with the original creators and platform users. Follow the linked
            post for the source context.
          </p>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <ShieldCheck
                  aria-hidden="true"
                  className="size-12 text-action"
                  weight="fill"
                />
                <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                  Are desktop pets safe?
                </h2>
                <p className="mt-5 text-pretty leading-7 text-charcoal">
                  Treat every desktop pet as software plus visual assets. A cute
                  preview is not a security review, so the command and package
                  still deserve the same attention as any developer tool.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "Read the exact npx command and selected slug before approval.",
                  "Use a current Node.js and npm setup from sources you trust.",
                  "Do not paste API keys, session tokens, or private project files into an install prompt.",
                  "Open the original pet listing when you need current package details or creator attribution.",
                  "Remove or replace a pet if it causes unexpected behavior, resource use, or visual obstruction.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border-2 border-graphite bg-white p-4"
                  >
                    <CheckCircle
                      aria-hidden="true"
                      className="mt-0.5 size-6 shrink-0 text-action"
                      weight="fill"
                    />
                    <p className="text-pretty font-bold leading-7 text-charcoal">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-balance text-center text-4xl font-black text-link sm:text-5xl">
            Codex Pets FAQ
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-pretty text-center text-lg leading-8 text-charcoal">
            Direct answers about installation, free desktop pets, safety, and
            what happens when you select the one-click link.
          </p>
          <div className="mt-10 grid gap-4">
            {petFaqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border-2 border-graphite p-5 sm:p-6"
              >
                <summary className="cursor-pointer text-lg font-black text-eel-dark-blue sm:text-xl">
                  {item.question}
                </summary>
                <p className="mt-4 text-pretty leading-7 text-charcoal">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
