"use client";

import * as Tabs from "@radix-ui/react-tabs";
import {
  AppleLogo,
  CheckCircle,
  DownloadSimple,
  WindowsLogo,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

import { CopyCommand } from "@/components/copy-command";

const macInstallCommand = [
  'install_dir="$(mktemp -d "${TMPDIR:-/tmp}/codex-dream-skin.XXXXXX")"',
  'curl -fL "https://codexdreamskin.top/downloads/codex-dream-skin-main.zip" -o "$install_dir/codex-dream-skin.zip"',
  'ditto -x -k "$install_dir/codex-dream-skin.zip" "$install_dir"',
  'cd "$install_dir/Codex-Dream-Skin-main/macos"',
  "./Install\\ Codex\\ Dream\\ Skin.command",
].join("\n");

const macRestoreCommand = `~/.codex/codex-dream-skin-studio/scripts/restore-dream-skin-macos.sh --restore-base-theme --restart-codex`;

const windowsInstallCommand = [
  '$installDir = Join-Path $env:TEMP ("codex-dream-skin-" + [guid]::NewGuid())',
  "New-Item -ItemType Directory -Path $installDir | Out-Null",
  'Invoke-WebRequest -Uri "https://codexdreamskin.top/downloads/codex-dream-skin-main.zip" -OutFile "$installDir\\codex-dream-skin.zip"',
  'Expand-Archive -Path "$installDir\\codex-dream-skin.zip" -DestinationPath $installDir',
  'Set-Location "$installDir\\Codex-Dream-Skin-main\\windows"',
  "powershell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\install-dream-skin.ps1",
  "powershell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\start-dream-skin.ps1",
].join("\n");

const windowsRestoreCommand = `powershell -NoProfile -ExecutionPolicy Bypass -File .\\scripts\\restore-dream-skin.ps1 -RestoreBaseTheme -PromptRestart`;

function CommandBlock({ command }: { command: string }) {
  return (
    <pre className="min-w-0 max-w-full overflow-x-auto rounded-xl border-2 border-graphite bg-[#f7fbf4] p-4 font-mono text-[13px] leading-6 text-eel-dark-blue sm:p-5 sm:text-sm">
      <code>{command}</code>
    </pre>
  );
}

export function InstallPanel() {
  const t = useTranslations("InstallPanel");
  const macRequirements = t.raw("mac.requirements") as string[];
  const windowsRequirements = t.raw("windows.requirements") as string[];

  return (
    <Tabs.Root defaultValue="mac" className="grid min-w-0 gap-6">
      <Tabs.List
        aria-label={t("platformLabel")}
        className="grid grid-cols-2 gap-3"
      >
        <Tabs.Trigger
          value="mac"
          className="platform-tab inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-graphite px-4 text-base font-black text-charcoal"
        >
          <AppleLogo aria-hidden="true" className="size-6" weight="fill" />
          macOS
        </Tabs.Trigger>
        <Tabs.Trigger
          value="windows"
          className="platform-tab inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-graphite px-4 text-base font-black text-charcoal"
        >
          <WindowsLogo aria-hidden="true" className="size-6" weight="fill" />
          Windows
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="mac" className="min-w-0 focus-visible:outline-none">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="min-w-0">
            <h3 className="text-balance text-3xl font-black text-eel-dark-blue">
              {t("mac.title")}
            </h3>
            <p className="mt-4 text-pretty leading-7 text-charcoal">
              {t("mac.description")}
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-bold text-charcoal">
              {macRequirements.map((requirement) => (
                <li key={requirement} className="flex gap-2.5">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-action" weight="fill" />
                  {requirement}
                </li>
              ))}
            </ul>
            <a
              href="/downloads/codex-dream-skin-main.zip"
              download
              className="button-primary mt-7 inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-extrabold"
            >
              <DownloadSimple aria-hidden="true" className="size-5" weight="bold" />
              {t("download")}
            </a>
          </div>
          <div className="grid min-w-0 gap-4">
            <div className="min-w-0">
              <p className="mb-2 text-sm font-black text-eel-dark-blue">
                {t("mac.fastInstall")}
              </p>
              <CommandBlock command={macInstallCommand} />
            </div>
            <CopyCommand
              command={macInstallCommand}
              label={t("mac.copyInstall")}
            />
            <details className="min-w-0 rounded-xl border-2 border-eel-light p-4">
              <summary className="cursor-pointer font-black text-eel-dark-blue">
                {t("restore")}
              </summary>
              <div className="mt-4 grid min-w-0 gap-3">
                <CommandBlock command={macRestoreCommand} />
                <CopyCommand
                  command={macRestoreCommand}
                  label={t("mac.copyRestore")}
                />
              </div>
            </details>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="windows" className="min-w-0 focus-visible:outline-none">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="min-w-0">
            <h3 className="text-balance text-3xl font-black text-eel-dark-blue">
              {t("windows.title")}
            </h3>
            <p className="mt-4 text-pretty leading-7 text-charcoal">
              {t("windows.description")}
            </p>
            <ul className="mt-6 grid gap-3 text-sm font-bold text-charcoal">
              {windowsRequirements.map((requirement) => (
                <li key={requirement} className="flex gap-2.5">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-action" weight="fill" />
                  {requirement}
                </li>
              ))}
            </ul>
            <a
              href="/downloads/codex-dream-skin-main.zip"
              download
              className="button-primary mt-7 inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-extrabold"
            >
              <DownloadSimple aria-hidden="true" className="size-5" weight="bold" />
              {t("download")}
            </a>
          </div>
          <div className="grid min-w-0 gap-4">
            <div className="min-w-0">
              <p className="mb-2 text-sm font-black text-eel-dark-blue">
                {t("windows.fastInstall")}
              </p>
              <CommandBlock command={windowsInstallCommand} />
            </div>
            <CopyCommand
              command={windowsInstallCommand}
              label={t("windows.copyInstall")}
            />
            <details className="min-w-0 rounded-xl border-2 border-eel-light p-4">
              <summary className="cursor-pointer font-black text-eel-dark-blue">
                {t("restore")}
              </summary>
              <div className="mt-4 grid min-w-0 gap-3">
                <CommandBlock command={windowsRestoreCommand} />
                <CopyCommand
                  command={windowsRestoreCommand}
                  label={t("windows.copyRestore")}
                />
              </div>
            </details>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
