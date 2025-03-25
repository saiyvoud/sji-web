import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import laTranslations from "./locales/la.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    la: { translation: laTranslations },
  },
  lng: "la",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
