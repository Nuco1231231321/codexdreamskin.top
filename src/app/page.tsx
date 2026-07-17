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

import { InstallPanel } from "@/components/install-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const faqItems = [
  {
    question: "Is Codex Dream Skin an official OpenAI product?",
    answer:
      "No. Codex Dream Skin is an independent open-source project. It launches the official Codex desktop app with a local debugging connection and injects visual CSS and decorative elements. It is not affiliated with or endorsed by OpenAI.",
  },
  {
    question: "Does this Codex skin modify app.asar or the official app files?",
    answer:
      "The project documentation says it does not modify the official .app bundle, app.asar, WindowsApps directory, or code signature. The theme is applied at runtime through a Chromium DevTools Protocol connection bound to the local computer.",
  },
  {
    question: "Can I use my own image as a Codex desktop theme?",
    answer:
      "On macOS, yes. After installation, use the Customize desktop launcher or the menu bar control to pick a local image. The current Windows package applies its bundled design and does not yet offer the same image picker.",
  },
  {
    question: "How do I remove Codex Dream Skin?",
    answer:
      "Use the Restore launcher created by the installer or copy the restore command from the platform panel above. Restore stops the injector, closes the saved local debugging session, restores backed-up appearance settings, and can reopen Codex normally.",
  },
  {
    question: "Why did my Codex theme stop working after an update?",
    answer:
      "The skin depends on renderer structure that can change when Codex Desktop updates. Run Restore, download the newest available package, reinstall, and use Verify. If the problem remains, keep the official appearance active until the theme package is updated.",
  },
  {
    question: "What does Codex 皮肤 mean?",
    answer:
      "Codex 皮肤 is the Chinese search term for a Codex skin or Codex theme. This page uses Codex Dream Skin, Codex desktop theme, and Codex 皮肤 to describe the same goal: changing the visual layer of Codex Desktop while keeping native controls interactive.",
  },
  {
    question: "Do I have to pay to use Codex Dream Skin?",
    answer:
      "No. The installer guide, downloads, Codex Pets gallery, pet starter, tutorials, verification steps, and restore guidance are free. The optional $4.99 and $9.99 services charge only for individual palette preparation, image placement, readability checking, configuration packaging, and support.",
  },
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Codex Dream Skin",
  url: "https://codexdreamskin.top/",
  description:
    "Install, customize, verify, and restore the unofficial Codex Dream Skin desktop theme.",
  inLanguage: "en",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteJsonLd, faqJsonLd]),
        }}
      />

      <SiteHeader ctaHref="#install" ctaLabel="Install skin" />

      <main>
        <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-[1200px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-link">
              Unofficial Codex desktop theme
            </p>
            <h1 className="max-w-[16ch] text-balance text-5xl font-black leading-[1.05] text-eel-dark-blue sm:text-6xl lg:text-[56px]">
              Change your Codex skin today.
            </h1>
            <p className="mt-5 max-w-[42ch] text-pretty text-lg font-semibold leading-8 text-charcoal">
              Install Codex Dream Skin, choose a look, verify it, and restore
              the official desktop appearance whenever you want.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#install"
                className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
              >
                Install the skin
                <ArrowDown aria-hidden="true" className="size-5" weight="bold" />
              </a>
              <Link
                href="/codex-pets"
                className="button-secondary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
              >
                <PawPrint aria-hidden="true" className="size-5" weight="fill" />
                Browse Codex Pets
              </Link>
            </div>
          </div>

          <figure>
            <div className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] bg-[#f7fbf4] p-2 sm:p-3">
              <Image
                src="/screenshots/codex-dream-skin-macos-home-1000.webp"
                alt="Codex Dream Skin running on the macOS Codex desktop app"
                width={1000}
                height={589}
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full rounded-xl border-2 border-eel-light"
              />
            </div>
            <figcaption className="mt-3 text-pretty text-xs font-bold leading-5 text-ash">
              Theme preview. Results can change with your image, platform,
              Codex version, and current package state.
            </figcaption>
          </figure>
        </section>

        <section id="install" className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-link sm:text-5xl">
                Pick your platform. Copy the command.
              </h2>
              <p className="mt-4 max-w-[65ch] text-pretty text-lg leading-8 text-charcoal">
                This installer panel uses the package mirrored on this site.
                Read the prerequisites, copy the command, and keep the restore
                command nearby before you change your Codex desktop theme.
              </p>
            </div>
            <InstallPanel />
          </div>
        </section>

        <section aria-labelledby="before-run-title" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 id="before-run-title" className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
            Know what changes before you run it.
          </h2>
          <div className="mt-10 grid border-y-2 border-graphite md:grid-cols-4">
            {[
              ["Native controls stay live", "The sidebar, project picker, suggestion buttons, task content, menus, and composer remain Codex controls."],
              ["Official binaries stay intact", "The project uses runtime injection instead of replacing app.asar, the macOS app bundle, or WindowsApps files."],
              ["Restore is part of the flow", "The installer creates or documents a restore path so you can stop the skin and return to the official appearance."],
              ["It is still experimental", "Codex updates can change private renderer details. Verify after installation and expect occasional compatibility fixes."],
            ].map(([title, body], index) => (
              <div
                key={title}
                className={`py-6 md:px-6 ${index < 3 ? "border-b-2 border-eel-light md:border-r-2 md:border-b-0" : ""}`}
              >
                <h3 className="text-xl font-black text-eel-dark-blue">{title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-charcoal">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8] py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <PawPrint
                aria-hidden="true"
                className="size-12 text-action"
                weight="fill"
              />
              <h2 className="mt-5 max-w-[15ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                Add a Codex pet beside your theme.
              </h2>
              <p className="mt-5 max-w-[56ch] text-pretty text-lg leading-8 text-charcoal">
                Codex Pets are small desktop companions installed with a short
                command. Browse cats, dogs, developer characters, and playful
                mascots, then open a prepared Codex task for the pet you choose.
              </p>
              <Link
                href="/codex-pets"
                className="button-primary mt-7 inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
              >
                Open the pet gallery
                <PawPrint aria-hidden="true" className="size-5" weight="fill" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["/pets/spinach.webp", "Spinach cream-gold cat Codex pet"],
                ["/pets/nougat.webp", "Nougat black-and-white pixel cat Codex pet"],
                ["/pets/maguang.webp", "Maguang developer character Codex pet"],
                ["/pets/mianmian.webp", "Mianmian fluffy dog Codex pet"],
              ].map(([src, alt]) => (
                <div
                  key={src}
                  className="grid min-h-[190px] place-items-center rounded-xl border-2 border-graphite border-b-[6px] bg-white p-4"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={192}
                    height={208}
                    sizes="(max-width: 1024px) 44vw, 240px"
                    className="max-h-[160px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <figure className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] p-2">
              <Image
                src="/screenshots/codex-dream-skin-macos-task.webp"
                alt="Themed Codex task view with native text and composer controls"
                width={1400}
                height={825}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-auto w-full rounded-xl"
              />
            </figure>
            <div className="lg:pt-10">
              <ImageSquare aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                A Codex desktop skin, not a pasted screenshot.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
                Codex Dream Skin adds a banner, background art, color treatment,
                and decorative layers around the existing interface. The intent
                is to keep everyday work possible: open a project, read a task,
                type in the composer, use menus, and move between routes.
              </p>
              <p className="mt-4 text-pretty leading-7 text-charcoal">
                Results vary with contrast, image crop, pets, and changing DOM
                selectors. Use Verify after installation and treat the current
                project documentation as the authority.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl font-black text-link sm:text-5xl">
                How this Codex theme changer works
              </h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
                Think of it as a temporary visual layer around the official app.
                This website never reaches into your computer. You download and
                run the project locally.
              </p>
            </div>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {[
                ["Discover the official app", "On macOS, the scripts find the com.openai.codex app and validate its signature, architecture, Team ID, and bundled Node runtime. On Windows, the scripts locate a registered Microsoft Store Codex package and validate its package identity before launching."],
                ["Start a local debugging session", "The themed launch starts Codex with Chromium DevTools Protocol available on 127.0.0.1. Loopback prevents network access from other devices, but the port is not authenticated against other software running under your local account."],
                ["Inject the visual layer", "The injector connects to expected app renderer targets, adds CSS and decorative DOM elements, and keeps watching so the skin can return after reloads or route changes. Native controls are placed above decorative layers and should remain clickable."],
                ["Verify or restore", "Verify checks the expected skin markers and can save a screenshot for inspection. Restore removes the live skin, stops the recorded injector and debugging session, restores saved appearance settings, and reopens Codex without the theme when requested."],
              ].map(([title, body]) => (
                <article key={title} className="border-l-[6px] border-action pl-5">
                  <h3 className="text-2xl font-black text-eel-dark-blue">{title}</h3>
                  <p className="mt-3 text-pretty leading-7 text-charcoal">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <Palette aria-hidden="true" className="size-12 text-action" weight="fill" />
              <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                Choose a theme that stays readable.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-8 text-charcoal">
                On Mac, the Customize launcher accepts PNG, JPEG, HEIC, TIFF,
                and WebP. Source images can be up to 50 MB, while prepared files
                are limited to 16 MB. Use a wide image at least 2000 pixels
                across with a calm left side for the home title.
              </p>
              <p className="mt-4 text-pretty leading-7 text-charcoal">
                Contrast matters more than novelty. Pick an image where body
                text, project names, composer controls, and focus states remain
                visible. Do not import the composite gallery previews as your
                wallpaper. They already contain interface artwork and are not
                intended as banner assets. Use your own licensed image or the
                bundled abstract demo.
              </p>
              <p className="mt-4 text-pretty leading-7 text-charcoal">
                Windows currently ships a bundled pink decorative theme. Its
                documentation does not claim the Mac image-picker workflow, so
                this site does not present custom Windows image upload as an
                available feature.
              </p>
            </div>
            <figure>
              <div className="overflow-hidden rounded-xl border-2 border-graphite border-b-[6px] p-2">
                <Image
                  src="/screenshots/codex-dream-skin-windows.webp"
                  alt="Preview of the bundled Codex Dream Skin design on Windows"
                  width={1200}
                  height={750}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <figcaption className="mt-3 text-pretty text-xs font-bold leading-5 text-ash">
                Windows package preview. Public artwork and likeness rights must
                be cleared before commercial redistribution.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-y-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <Wrench aria-hidden="true" className="size-12 text-action" weight="fill" />
                <h2 className="mt-5 text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                  Fix the common failure paths.
                </h2>
                <p className="mt-5 text-pretty leading-7 text-charcoal">
                  Start with reversible checks. Keep official Codex usable, and
                  report the exact app, system, and Dream Skin versions in every
                  issue.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  ["The theme only partly appears", "Run Verify first. If native controls work but the decorative layer is incomplete, run Restore, download the newest available package, reinstall, and verify again. Codex renderer changes can make old selectors fail."],
                  ["Mac reports a missing background asset", "The project changelog says version 1.1.2 corrected a bundled theme reference. Download the current package before retrying instead of creating a fake file path."],
                  ["Codex configuration looks wrong", "Stop and use the provided Restore flow. The project keeps a theme backup and recent updates improved clean config round trips. Do not overwrite config.toml with an unrelated template."],
                  ["The Windows result differs from the preview", "The bundled preview is an intended design reference, not a guaranteed pixel match. Confirm Node 22 or newer, then verify both the home screen and a normal task."],
                ].map(([title, body]) => (
                  <details key={title} className="rounded-xl border-2 border-graphite bg-white p-5">
                    <summary className="cursor-pointer text-lg font-black text-eel-dark-blue">
                      {title}
                    </summary>
                    <p className="mt-3 text-pretty leading-7 text-charcoal">{body}</p>
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
              <h2 className="mt-5 max-w-[20ch] text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
                Want the colors and image prepared for you?
              </h2>
              <p className="mt-5 max-w-[68ch] text-pretty text-lg leading-8 text-charcoal">
                Keep the full self-service path free, or choose a one-time setup
                service when you would rather receive a readable palette,
                prepared configuration, and install instructions. Payment is
                for personalization and support—not for the open-source software.
              </p>
              <p className="mt-4 font-black text-eel-dark-blue">
                Quick Setup $4.99 · Custom Skin Early Access $9.99
              </p>
            </div>
            <Link
              href="/custom-skin"
              className="button-primary inline-flex min-h-14 items-center justify-center px-6 font-black"
            >
              Compare skin services
            </Link>
          </div>
        </section>

        <section id="safety" className="scroll-mt-24 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
            <ShieldCheck aria-hidden="true" className="size-14 text-eel-dark-blue" weight="fill" />
            <div>
              <h2 className="text-balance text-3xl font-black text-eel-dark-blue sm:text-4xl">
                The local CDP port is the real security tradeoff.
              </h2>
              <p className="mt-4 max-w-[74ch] text-pretty leading-7 text-eel-dark-blue">
                Codex Dream Skin binds the debugging port to 127.0.0.1, so it is
                not exposed to your network. Chromium CDP still has no local
                process authentication. Untrusted software on the same computer
                could try to connect. Run trusted software, use Verify, and use
                Restore when the themed session is no longer needed.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-balance text-center text-4xl font-black text-link sm:text-5xl">
            Codex Dream Skin FAQ
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-pretty text-center text-lg leading-8 text-charcoal">
            Short answers to the questions people ask before installing a Codex
            skin, changing a Codex desktop theme, or returning to the official
            interface.
          </p>
          <div className="mt-10 grid gap-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border-2 border-graphite p-5 sm:p-6">
                <summary className="cursor-pointer text-lg font-black text-eel-dark-blue sm:text-xl">
                  {item.question}
                </summary>
                <p className="mt-4 text-pretty leading-7 text-charcoal">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-eel-light bg-[#fbfff8]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-balance text-3xl font-black text-eel-dark-blue sm:text-4xl">
                  Check the mirrored ZIP and keep Restore ready.
                </h2>
                <p className="mt-4 max-w-[70ch] text-pretty leading-7 text-charcoal">
                  The ZIP mirrored on this site was tested for archive integrity
                  on July 16, 2026. Its SHA-256 is shown below so you can confirm
                  the exact file you received. A checksum proves file identity,
                  not safety, so read the prerequisites and never put API keys,
                  auth files, or private screenshots in a theme package.
                </p>
                <code className="mt-4 block max-w-[76ch] break-all rounded-xl border-2 border-eel-light bg-white p-3 font-mono text-xs leading-5 text-eel-dark-blue">
                  2a54b8f7b6474b22587b7692395c76dd0fc9acce27007482f42df827ccb42251
                </code>
              </div>
              <a
                href="/downloads/codex-dream-skin-main.zip"
                download
                className="button-primary inline-flex min-h-14 items-center justify-center gap-2 px-6 font-black"
              >
                Download ZIP
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
