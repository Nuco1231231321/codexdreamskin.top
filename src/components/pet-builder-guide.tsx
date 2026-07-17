import {
  CheckCircle,
  DownloadSimple,
  FileCode,
  GridFour,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

import { CopyCommand } from "@/components/copy-command";

const manifestExample = `{
  "id": "my-codex-pet",
  "displayName": "My Codex Pet",
  "description": "A custom companion for my Codex desktop.",
  "spritesheetPath": "spritesheet.webp",
  "kind": "creature"
}`;

const frameCounts = [6, 8, 8, 4, 5, 8, 6, 6, 6];

type BuilderStep = { title: string; body: string };

export function PetBuilderGuide() {
  const t = useTranslations("PetBuilder");
  const steps = t.raw("steps") as BuilderStep[];
  const animationRows = t.raw("animationRows") as string[];

  return (
    <section
      id="create-codex-pet"
      className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
            {t("intro")}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-xl border-2 border-graphite border-b-[7px] bg-eel-light p-5 sm:p-6">
            <DownloadSimple
              aria-hidden="true"
              className="size-11 text-action-dark"
              weight="bold"
            />
            <h3 className="mt-4 text-balance text-3xl font-black text-eel-dark-blue">
              {t("starterTitle")}
            </h3>
            <p className="mt-3 text-pretty leading-7 text-eel-dark-blue">
              {t("starterBody")}
            </p>
            <a
              href="/downloads/codex-pet-v1-starter.zip"
              download
              className="button-primary mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 text-center font-black"
            >
              <DownloadSimple aria-hidden="true" className="size-5" weight="bold" />
              {t("starterCta")}
            </a>
            <p className="mt-3 text-pretty text-sm font-bold leading-6 text-charcoal">
              {t("starterNote")}
            </p>
          </div>

          <ol className="border-y-2 border-graphite">
            {steps.map((step, index) => (
              <li key={step.title} className={`grid gap-4 py-6 sm:grid-cols-[56px_1fr] sm:gap-6 ${index < steps.length - 1 ? "border-b-2 border-eel-light" : ""}`}>
                <span className="grid size-12 place-items-center rounded-xl border-2 border-action bg-eel-light text-lg font-black tabular-nums text-eel-dark-blue">{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-black text-eel-dark-blue">{step.title}</h3>
                  <p className="mt-2 text-pretty leading-7 text-charcoal">{step.body}</p>
                  {index === steps.length - 1 ? (
                    <a href="https://codex-pets.net/#/upload" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4">
                      <UploadSimple aria-hidden="true" className="size-5" weight="bold" />
                      {t("validator")}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid min-w-0 gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <GridFour
                aria-hidden="true"
                className="size-8 text-action-dark"
                weight="fill"
              />
              <h3 className="text-3xl font-black text-eel-dark-blue">
                {t("rowMap")}
              </h3>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {animationRows.map((name, index) => (
                <div
                  key={name}
                  className="rounded-xl border-2 border-graphite bg-white p-4"
                >
                  <p className="text-sm font-black tabular-nums text-link">
                    {t("row", { number: index })}
                  </p>
                  <p className="mt-1 font-black text-eel-dark-blue">{name}</p>
                  <p className="mt-1 text-sm font-bold text-ash">{t("frames", { count: frameCounts[index] })}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <FileCode
                aria-hidden="true"
                className="size-8 text-action-dark"
                weight="fill"
              />
              <h3 className="text-3xl font-black text-eel-dark-blue">
                {t("manifestTitle")}
              </h3>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-xl border-2 border-graphite bg-white p-5 font-mono text-sm leading-7 text-eel-dark-blue">
              <code>{manifestExample}</code>
            </pre>
            <CopyCommand
              command={manifestExample}
              label={t("copyManifest")}
              className="mt-4"
            />
            <div className="mt-5 flex gap-3 rounded-xl border-2 border-action bg-eel-light p-4">
              <CheckCircle
                aria-hidden="true"
                className="mt-0.5 size-6 shrink-0 text-action-dark"
                weight="fill"
              />
              <p className="text-pretty font-bold leading-7 text-eel-dark-blue">
                {t("validatorNote")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
