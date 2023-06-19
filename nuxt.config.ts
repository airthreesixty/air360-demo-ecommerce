// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      platform: process.env.PLATFORM,
    },
  },
  css: [
    'bootstrap/scss/bootstrap.scss',
    'vue3-carousel/dist/carousel.css',
    '~/assets/scss/main.scss',
  ],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
        strategy: 'prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
    ],
    defaultLocale: 'ja',
    langDir: 'locales',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   redirectOn: 'root',
    //   alwaysRedirect: true,
    // },
    baseUrl: process.env.BASE_URL,
  },
  app: {
    head: {
      title: 'Outstock - Clean, Minimal eCommerce Vue Nuxt 3 Template',
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
});
