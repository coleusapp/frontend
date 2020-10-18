export default {
  mode: 'universal',

  /**
   * Component to auto-load and their prefixes.
   */
  components: [
    { path: '~/components/', prefix: 'coleus' },
    { path: '~/components/svg/', prefix: 'coleus-svg' }
  ],

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'fa'
    },
    title: 'Coleus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  /*
   ** Plugins to load before mounting the App
   **
   */
  plugins: [
    '~/mixins/common.js',
    { src: '~/plugins/progressive-image.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
    '@nuxtjs/router',
    ['@nuxtjs/google-analytics', { id: process.env.GOOGLE_ANALYTICS_ID }]
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo'],

  pwa: {
    meta: {
      name: 'Coleus',
      author: 'Amirmasoud Sheydaei',
      theme_color: '#ffffff',
      lang: 'fa',
      ogHost: process.env.FRONT_URL || 'http://coleus.test',
      nativeUI: true
    },
    manifest: {
      name: 'Coleus',
      lang: 'fa'
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.GQL_URL || 'http://graphql.coleus.test/v1/graphql'
      },
      backend: {
        httpEndpoint:
          process.env.BACKEND_URL || 'http://backend.coleus.test/graphql'
      }
    }
  },

  publicRuntimeConfig: {
    appUrl: process.env.APP_URL || 'local',
    appLocale: process.env.APP_LOCALE || 'fa',
    frontUrl: process.env.FRONT_URL || 'http://coleus.test',
    gqlUrl: process.env.GQL_URL || 'http://graphql.coleus.test/v1/graphql',
    backendUrl: process.env.BACKEND_URL || 'http://backend.coleus.test/graphql',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  privateRuntimeConfig: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  }
}
