"use client";

import { Cookie } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const consentStorageKey = "codex-dream-skin-analytics-consent";
const settingsEvent = "codex-dream-skin-open-cookie-settings";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function startAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", "G-D5PHPQZHTL", {
    anonymize_ip: true,
  });

  if (!document.querySelector('script[data-codex-analytics="true"]')) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-D5PHPQZHTL";
    script.dataset.codexAnalytics = "true";
    document.head.appendChild(script);
  }
}

export function ConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentStorageKey);
    let openTimer: number | undefined;
    if (savedConsent === "granted") {
      startAnalytics();
    } else if (savedConsent === null) {
      openTimer = window.setTimeout(() => setIsOpen(true), 0);
    }

    function openSettings() {
      setIsOpen(true);
    }

    window.addEventListener(settingsEvent, openSettings);
    return () => {
      if (openTimer !== undefined) window.clearTimeout(openTimer);
      window.removeEventListener(settingsEvent, openSettings);
    };
  }, []);

  function saveConsent(value: "granted" | "denied") {
    window.localStorage.setItem(consentStorageKey, value);
    if (value === "granted") {
      startAnalytics();
    } else {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Analytics preferences"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto max-w-[760px] rounded-xl border-2 border-graphite border-b-[7px] bg-white p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border-2 border-action bg-eel-light">
          <Cookie aria-hidden="true" className="size-6 text-eel-dark-blue" weight="fill" />
        </span>
        <div className="min-w-0">
          <h2 className="text-balance text-xl font-black text-eel-dark-blue">
            Choose your analytics preference
          </h2>
          <p className="mt-2 text-pretty text-sm leading-6 text-charcoal">
            Essential site features work without analytics. If you accept,
            Google Analytics helps measure which install guides and gallery
            pages are useful. You can change this choice from the footer.
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => saveConsent("denied")}
          className="button-secondary min-h-12 px-5 font-black"
        >
          Use essential only
        </button>
        <button
          type="button"
          onClick={() => saveConsent("granted")}
          className="button-primary min-h-12 px-5 font-black"
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(settingsEvent));
}
