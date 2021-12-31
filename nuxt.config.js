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

  plugins: [
    "~plugins/fragment.js",
    "~plugins/moment.js",
    "~plugins/tooltip.js",
  ],

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/style-resources"],

  styleResources: {
    scss: "./assets/styles/*.scss",
  },

  modules: ["@nuxtjs/axios", "nuxt-svg-loader", '~/io'],
};
