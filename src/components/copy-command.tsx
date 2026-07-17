"use client";

import { Check, CopySimple, WarningCircle } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";

type CopyCommandProps = {
  command: string;
  label: string;
  className?: string;
};

export function CopyCommand({ command, label, className }: CopyCommandProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const t = useTranslations("Common.copy");

  function copyWithSelection(value: string) {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }

  async function copyCommand() {
    try {
      const clipboardCopy = navigator.clipboard?.writeText(command);
      const copiedWithClipboard = clipboardCopy
        ? await Promise.race([
            clipboardCopy.then(() => true),
            new Promise<false>((resolve) =>
              window.setTimeout(() => resolve(false), 700),
            ),
          ])
        : false;

      if (!copiedWithClipboard && !copyWithSelection(command)) {
        throw new Error("Clipboard access failed");
      }

      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <button
        type="button"
        onClick={copyCommand}
        className="button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-extrabold sm:w-fit"
      >
        {status === "copied" ? (
          <Check aria-hidden="true" className="size-5" weight="bold" />
        ) : (
          <CopySimple aria-hidden="true" className="size-5" weight="bold" />
        )}
        {status === "copied" ? t("copied") : label}
      </button>
      <p
        aria-live="polite"
        className={cn(
          "min-h-5 text-sm font-bold",
          status === "error" ? "text-red-700" : "text-ash",
        )}
      >
        {status === "error" ? (
          <span className="inline-flex items-center gap-1.5">
            <WarningCircle aria-hidden="true" className="size-4" weight="fill" />
            {t("error")}
          </span>
        ) : status === "copied" ? (
          t("success")
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
