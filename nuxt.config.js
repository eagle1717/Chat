export default {
  head: {
    title: "Business Chat",
    htmlAttrs: {
      lang: "en",
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

  css: ["~/assets/styles/variables.scss", "~/assets/styles/fonts.scss"],

  plugins: ["~plugins/fragment.js", "~plugins/moment.js"],

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/style-resources"],

  modules: [
    "@nuxtjs/axios",
    "nuxt-svg-loader",
    "~/io",
    "@nuxtjs/yandex-metrika",
  ],

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
};
