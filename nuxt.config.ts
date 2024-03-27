import wasm from 'vite-plugin-wasm';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt', 'nuxt-icon'],
  vite: {
    plugins: [wasm()],
  },
})
