export default {
  head: {
    title: "Business Chat",
    htmlAttrs: {
      lang: "en",
      translate: "no",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Find someone to do business with...",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  components: true,

  build: {
    extractCSS: true,
  },

  css: ["~/assets/styles/variables.scss", "~/assets/styles/fonts.scss"],

  plugins: ["~plugins/fragment.js", "~plugins/moment.js"],

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/style-resources"],

  styleResources: {
    scss: "./assets/styles/*.scss",
  },

  publicRuntimeConfig: {
    yandexMetrika: {
      id: 88441210,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    },
  },

  loaders: {
    cssModules: {
      modules: {
        localIdentName: "[hash:base64:6]",
      },
    },
  },

  router: {
    extendRoutes(routes) {
      for (const route of routes) {
        if (route.path == "/") {
          route.name = "Home";
        }
      }
      return routes;
    },
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
    prefetchLinks: false,
  },

  modules: [
    "@nuxtjs/axios",
    "nuxt-svg-loader",
    "~/io",
    "@nuxtjs/yandex-metrika",
  ],
};
