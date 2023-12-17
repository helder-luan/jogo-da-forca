import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@store': '/src/store',
      '@services': '/src/services',
    },
  },
  plugins: [vue()],
})
