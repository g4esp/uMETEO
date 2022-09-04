import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'uMETEO',
        short_name: 'uMETEO',
        description: 'Meteo app',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      } 
    })
  ],
  // server: {
  //   host: true,
  //   https: true,
  // },
})
