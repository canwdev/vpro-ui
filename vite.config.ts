import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  // port
  server: {
    port: 3033,
    open: true,
  },
  plugins: [vue(), vueJsx()],
})
