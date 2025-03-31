import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // for user site (username.github.io)
  // if this was a project site, you'd use: base: '/repository-name/'
})
