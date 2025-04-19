import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/clone-some/', // Must match your repository name exactly
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
