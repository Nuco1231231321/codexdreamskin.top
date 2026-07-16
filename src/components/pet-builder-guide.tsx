import {
  CheckCircle,
  DownloadSimple,
  FileCode,
  GridFour,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";

import { CopyCommand } from "@/components/copy-command";

const manifestExample = `{
  "id": "my-codex-pet",
  "displayName": "My Codex Pet",
  "description": "A custom companion for my Codex desktop.",
  "spritesheetPath": "spritesheet.webp",
  "kind": "creature"
}`;

const animationRows = [
  ["Idle", "6 frames"],
  ["Run right", "8 frames"],
  ["Run left", "8 frames"],
  ["Wave", "4 frames"],
  ["Jump", "5 frames"],
  ["Failed", "8 frames"],
  ["Waiting", "6 frames"],
  ["Running", "6 frames"],
  ["Review", "6 frames"],
];

export function PetBuilderGuide() {
  return (
    <section
      id="create-codex-pet"
      className="scroll-mt-24 border-y-2 border-eel-light bg-[#fbfff8]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="text-balance text-4xl font-black text-eel-dark-blue sm:text-5xl">
            How to make your own Codex pet
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-charcoal">
            Start with the documented V1 package. It is still supported, uses
            one fixed sprite grid, and avoids guessing about the newer
            direction format.
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
              Download the V1 starter
            </h3>
            <p className="mt-3 text-pretty leading-7 text-eel-dark-blue">
              The ZIP contains a valid manifest, a transparent 1536 x 1872
              WebP sheet, the nine animation rows, and publishing instructions.
            </p>
            <a
              href="/downloads/codex-pet-v1-starter.zip"
              download
              className="button-primary mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 px-5 text-center font-black"
            >
              <DownloadSimple aria-hidden="true" className="size-5" weight="bold" />
              Download starter ZIP
            </a>
            <p className="mt-3 text-pretty text-sm font-bold leading-6 text-charcoal">
              The blank sheet is a template, not a finished pet. Replace it
              with artwork you created or have permission to distribute.
            </p>
          </div>

          <ol className="border-y-2 border-graphite">
            <li className="grid gap-4 border-b-2 border-eel-light py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
              <span className="grid size-12 place-items-center rounded-xl border-2 border-action bg-eel-light text-lg font-black tabular-nums text-eel-dark-blue">
                1
              </span>
              <div>
                <h3 className="text-2xl font-black text-eel-dark-blue">
                  Draw on a transparent grid
                </h3>
                <p className="mt-2 text-pretty leading-7 text-charcoal">
                  Keep every frame inside a 192 x 208 pixel cell. The full
                  sheet is eight columns wide and nine rows tall. Keep the pet
                  centered so movement does not jump between frames.
                </p>
              </div>
            </li>
            <li className="grid gap-4 border-b-2 border-eel-light py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
              <span className="grid size-12 place-items-center rounded-xl border-2 border-action bg-eel-light text-lg font-black tabular-nums text-eel-dark-blue">
                2
              </span>
              <div>
                <h3 className="text-2xl font-black text-eel-dark-blue">
                  Place the nine animation rows
                </h3>
                <p className="mt-2 text-pretty leading-7 text-charcoal">
                  Row order is part of the format. Put unused cells after the
                  stated frame count on a transparent background.
                </p>
              </div>
            </li>
            <li className="grid gap-4 border-b-2 border-eel-light py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
              <span className="grid size-12 place-items-center rounded-xl border-2 border-action bg-eel-light text-lg font-black tabular-nums text-eel-dark-blue">
                3
              </span>
              <div>
                <h3 className="text-2xl font-black text-eel-dark-blue">
                  Edit pet.json
                </h3>
                <p className="mt-2 text-pretty leading-7 text-charcoal">
                  Use a lowercase id with letters, numbers, and hyphens. Keep
                  the filename and spritesheet path unchanged. Valid kinds are
                  object, animal, person, and creature.
                </p>
              </div>
            </li>
            <li className="grid gap-4 py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
              <span className="grid size-12 place-items-center rounded-xl border-2 border-action bg-eel-light text-lg font-black tabular-nums text-eel-dark-blue">
                4
              </span>
              <div>
                <h3 className="text-2xl font-black text-eel-dark-blue">
                  Validate, publish, and install
                </h3>
                <p className="mt-2 text-pretty leading-7 text-charcoal">
                  Sign in to the public upload flow, choose pet.json and
                  spritesheet.webp, then fix every validation error. After a
                  slug is published, install it with npx codex-pets add followed
                  by that slug.
                </p>
                <a
                  href="https://codex-pets.net/#/upload"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 font-extrabold text-link underline decoration-2 underline-offset-4"
                >
                  <UploadSimple aria-hidden="true" className="size-5" weight="bold" />
                  Open the package validator
                </a>
              </div>
            </li>
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
                Sprite row map
              </h3>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {animationRows.map(([name, frameCount], index) => (
                <div
                  key={name}
                  className="rounded-xl border-2 border-graphite bg-white p-4"
                >
                  <p className="text-sm font-black tabular-nums text-link">
                    Row {index}
                  </p>
                  <p className="mt-1 font-black text-eel-dark-blue">{name}</p>
                  <p className="mt-1 text-sm font-bold text-ash">{frameCount}</p>
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
                Manifest template
              </h3>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-xl border-2 border-graphite bg-white p-5 font-mono text-sm leading-7 text-eel-dark-blue">
              <code>{manifestExample}</code>
            </pre>
            <CopyCommand
              command={manifestExample}
              label="Copy pet.json"
              className="mt-4"
            />
            <div className="mt-5 flex gap-3 rounded-xl border-2 border-action bg-eel-light p-4">
              <CheckCircle
                aria-hidden="true"
                className="mt-0.5 size-6 shrink-0 text-action-dark"
                weight="fill"
              />
              <p className="text-pretty font-bold leading-7 text-eel-dark-blue">
                The public validator checks the manifest schema, allowed kind,
                filenames, WebP format, and exact sprite dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
