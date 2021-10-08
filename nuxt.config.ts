export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - template',
    title: 'template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/variables.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
    '@nuxtjs/composition-api/module',
    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  sitemap: {
    hostname: 'https://pictorial.netlify.app/',
    gzip: true,
    trailingSlash: true,
  },
  pwa: {
    manifest: {
      name: 'Nuxt Template',
      lang: 'en',
      theme_color: '#fff',
    },
    meta: {
      lang: 'en',
      ogSiteName: 'Nuxt JS',
      ogTitle: 'Nuxt WindiCSS',
      author: 'Lakshya Singh',
    },
  },
  generate: {
    crawler: true,
    fallback: true,
    interval: 2000,
  },
  robots: {
    UserAgent: '*',
    Allow: '*',
  },
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: ['node_modules', 'dist', '.git', '.github', '.nuxt'],
    },
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img',
      },
    },
  },
}
