// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
