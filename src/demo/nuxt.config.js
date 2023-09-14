import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      environment: process.env.NUXT_PUBLIC_NODE_ENV || 'development',
      version: process.env.NUXT_PUBLIC_VERSION || 'development',
      APIHost: process.env.NUXT_PUBLIC_API_HOST || 'https://api.github.com/',
      githubProfileURL: process.env.NUXT_PUBLIC_GITHUB_PROFILE_URL || 'https://github.com/felixleo22',
      npmHost: process.env.NUXT_PUBLIC_NPM_HOST || 'https://www.npmjs.com/package',
    },
  },

  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

  build: {
    transpile: ['vuetify'],
  },

  i18n: {
    vueI18n: './i18n.config.js',
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
});
