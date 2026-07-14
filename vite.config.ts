import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages: https://farsa2.github.io/diana-34/
  base: '/diana-34/',
  plugins: [react(), tailwindcss()],
})
