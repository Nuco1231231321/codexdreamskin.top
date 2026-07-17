import enMessages from "../../messages/en.json";
import zhMessages from "../../messages/zh.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const messagesByLocale = {
  en: enMessages,
  zh: zhMessages,
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessagesForLocale(locale: Locale) {
  return messagesByLocale[locale];
}

export function getClientMessagesForLocale(locale: Locale) {
  const messages = getMessagesForLocale(locale);

  return {
    Common: {
      languageSwitcher: messages.Common.languageSwitcher,
      footer: {
        cookieSettings: messages.Common.footer.cookieSettings,
      },
      cookie: messages.Common.cookie,
      copy: messages.Common.copy,
      checkout: messages.Common.checkout,
    },
    InstallPanel: messages.InstallPanel,
    PetPicker: messages.PetPicker,
    Order: {
      brief: messages.Order.brief,
    },
  };
}
