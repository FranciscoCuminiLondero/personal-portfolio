import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy como GitHub Pages Project Page:
// https://FranciscoCuminiLondero.github.io/personal-portfolio/
// https://vite.dev/config/
export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [react()],
})
