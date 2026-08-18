import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy como GitHub Pages User Page (https://franciscocuminilondero.github.io/):
// se sirve desde la raíz, así que no hace falta configurar `base`.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
