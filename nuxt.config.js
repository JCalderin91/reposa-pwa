const vuetifyConfig = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#009688',
        secondary: '#d96c07',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: "Posada Las Marites",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Sean todos bienvenidos a su posada LAs Marites y disfrute el placer de hospedarse con nosotros"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/icon.png"
    }],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filters.js',
    '~plugins/v-mask.js',
    {
      src: "@/plugins/aos.js",
      ssr: false
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/vuetify', vuetifyConfig]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources"
  ],
  /* style resorces */
  styleResources: {
    scss: ["@/assets/styles/main.scss"]
  },
  // pwa: {
  //   icon: false // disables the icon module
  // },

  /*
   ** Overwrite's generated manifest values
   */
  manifest: {
    "name": "Las Marites PWA",
    "short_name": "Las Marites",
    "start_url": "/",
    "display": "standalone",
    "lang": "es",
    "theme_color": "#d96c07",
    "background_color": "#009688",
    "orientation": "portrait-primary",
    "icons": [{
        "src": "/icons/icon-64x64.png",
        "sizes": "64x64",
        "type": "image/png",
      },
      {
        "src": "/icons/icon-120x120.png",
        "sizes": "120x120",
        "type": "image/png",
      },
      {
        "src": "/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
      },
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
      },

    ]

  },
  workbox: {
    enable: true,
    runtimeCaching: [{
      urlPattern: 'http://localhost:3000/.*',
      handler: 'cacheFirst',
      method: 'GET',
      strategyOptions: {
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }, ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://presta-back.clvrt.li/api/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  },
  // vuetify: {
  //   theme: {
  //     dark: true
  //   }
  // }
};
