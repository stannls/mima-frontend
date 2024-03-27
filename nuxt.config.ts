import wasm from 'vite-plugin-wasm';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode'],
  vite: {
    plugins: [wasm()],
  },
})
