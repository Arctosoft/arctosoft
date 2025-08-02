// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-27",
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/sitemap",
  ],
  build: {
    transpile: ["@heroicons/vue"],
  },

  ssr: false,

  //debug: true,

  tailwindcss: { exposeConfig: true },

  css: ["~/assets/css/tailwind.css", "~/assets/css/inter.css"],

  app: {
    head: {
      title: "Arctosoft",
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      link: [
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
    },
  },

  site: {
    url: "https://arctosoft.com",
  },

  sitemap: {
    credits: false,
  },

  routeRules: {
    "/apps/*": { index: false },
  },
});
