import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000, // dev
    // port: 80, // prod
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 3000 // dev
      // clientPort: 80 // prod
    }
  }
})
