import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      include: /\.(png|jpe?g|webp|avif)$/i,
      exclude: /node_modules/,
      webp: {
        quality: 75,
      },
      avif: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      }
    }),
  ],
})