import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt', 'nuxt-icon'],
  ssr: false,
  vite: {
    plugins: [wasm(), topLevelAwait()],
    mode: 'static',
  },
  nitro: {
	experimental: {
		wasm: true
	}
  }
})
