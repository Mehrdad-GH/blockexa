// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-swiper", "nuxt-aos","vue3-carousel-nuxt"],
  css :["~/assets/main.css"],
  colorMode: {
    preference: 'light'
  }
})
