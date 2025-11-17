import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deployment: replace 'your-repo-name' with your actual repo name
  // For custom domain or root deployment, use: base: '/'
  base: './', // This works for any deployment location
})

