// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  devtools: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'luxt-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/tailwind.css', '~/assets/scss/global.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    'nuxt-typed-router',
    '@pinia/nuxt',
    // '@nuxt/image',
    // '@vueuse/nuxt',
    // '@nuxtjs/robots',
    // '@nuxtjs/google-fonts',
    // '@nuxtjs/i18n',
    // 'nuxt-typed-router',
    // [
    //   'nuxt-sass-resources-loader',
    //   ['@/assets/scss/_mixins.scss', '@/assets/scss/global.scss'],
    // ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  compatibilityDate: '2024-07-31',

  server: {
    port: 3000,
    host: '0.0.0.0',
    cors: {
      origin: true,
      credentials: true,
    },
  },
  //
  // fonts: {
  //   families: {
  //     Inter: [300, 400, 500, 600, 700],
  //     Poppins: [300, 400, 500, 600, 700],
  //   },
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_vars.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;
          `,
          javascriptEnabled: true,
          silenceDeprecations: ["legacy-js-api"],
          api: 'modern-compiler'
        },
      },
    }
  }
});
