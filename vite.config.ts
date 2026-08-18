import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy como GitHub Pages Project Page:
// https://franciscocuminilondero.github.io/portfolio/
// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
