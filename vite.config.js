import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',           // ←←← Idi important
  build: {
    outDir: 'dist'     // Vite default idi, confirm chey
  }
})