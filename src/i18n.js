import i18n from "i18next";
// import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationNP from './locales/np/translation.json';

export const DEFAULT_LANGUAGE = 'en';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  np: {
    translation: translationNP
  }
};

i18n
  // .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;