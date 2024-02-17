// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt", "nuxt-icon", '@indielayer/ui/nuxt'],
  css: ['~/assets/scss/main.scss'],
  build: {
    transpile: ['@indielayer/ui'],
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
