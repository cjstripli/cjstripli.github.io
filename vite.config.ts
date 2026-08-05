import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User/org site (cjstripli.github.io) is served from the domain root
  base: '/',
})
