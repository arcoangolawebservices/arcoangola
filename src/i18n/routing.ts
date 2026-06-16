import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "fr"],
  defaultLocale: "pt",
  pathnames: {
    "/": "/",
    "/courses": "/courses",
    "/corporate": "/corporate",
  },
});

export type Locale = (typeof routing.locales)[number];
