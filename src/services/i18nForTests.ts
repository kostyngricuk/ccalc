import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '@locales/translationEN.json';
import translationRU from '@locales/translationRU.json';


const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources
  });

export default i18n;
