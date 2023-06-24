import {defineConfig} from 'vite'
import pluginReact from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    global: 'globalThis',
    process: '{env: {}}'
  },
  plugins: [pluginReact()]
})