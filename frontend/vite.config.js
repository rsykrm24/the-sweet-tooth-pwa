import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
      manifest: {
        name: 'The sweet tooth',
        short_name: 'Sweet tooth',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/vite.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './public/vite.svg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
