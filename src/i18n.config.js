import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

import { defineI18nConfig } from '#imports';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    fr,
  },
}));
