import { getRequestConfig } from "next-intl/server";

import {
  defaultLocale,
  getMessagesForLocale,
  isLocale,
} from "@/i18n/config";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return {
    locale,
    messages: getMessagesForLocale(locale),
  };
});
