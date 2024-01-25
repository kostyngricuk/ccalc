import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

import { LANGUAGES } from './constants/global';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: LANGUAGES[0].code,
        debug: process.env.NODE_ENV !== "production",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;