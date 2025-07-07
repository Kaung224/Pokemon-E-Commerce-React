import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        '4xl': '1800px',
        '3xl' : '1400px', // 👈 your custombreakpoint
        '2xl': '1200px',
        '1xl' : '700px',
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()],
})
