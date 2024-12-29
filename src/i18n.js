// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationZH from './locales/zh/translation.json';

// Get the saved language from localStorage or default to Spanish
const savedLanguage = localStorage.getItem('language') || 'es'; // Default is 'es' (Spanish)

// Configure i18n
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            es: {
                translation: translationES,
            },
            zh: {
                translation: translationZH,
            },
        },
        lng: savedLanguage, // Use the language from localStorage or default
        fallbackLng: 'es', // If the language is not found, fall back to Spanish
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
