const globSassLoader = {
  test: /\.scss/,
  enforce: "pre",
  loader: "import-glob-loader"
};

const isProd = process.env.APP_ENV === 'production';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  vue: {
    config: {
      productionTip: false,
      devtools: !isProd
    }
  },

  server: {
    port: process.env.SERVER_PORT, // default: 3000
    host: !isProd ? 'localhost' : '0.0.0.0' // default: localhost 0.0.0.0
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'user-front',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/fav_64x64.ico'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/css/normalize.min.css', lang: 'css'},
    {src: '~/assets/scss/main.scss', lang: 'scss'},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/global.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",

    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    // credentials: true,
    withCredentials: true,
    proxyHeaders: false,
    retry: false,
  },

  auth: {
    localStorage: false,
    redirect: {
      // login: '/',
      // logout: '/login'
    },
    resetOnError: true,
    rewriteRedirects: true,
    fullPathRedirect: true,
    strategies: {
      localAuth: {
        _scheme: 'local',
        tokenType: 'Bearer',
        endpoints: {
          login: {url: '/login', method: 'post', propertyName: 'token'},
          logout: {url: '/logout', method: 'post'},
          user: {url: '/self-user', method: 'get', propertyName: 'data'}
        }
      },
      registerAuth: {
        _scheme: "local",
        tokenType: "Bearer",
        endpoints: {
          login: { url: "/register", method: "post", propertyName: "token" },
          logout: { url: "/logout", method: "post" },
          user: { url: "/self-user", method: "get", propertyName: "data" },
        },
      },
    },
    plugins: [
      {src: '~plugins/auth-callback', mode: 'client'}
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
