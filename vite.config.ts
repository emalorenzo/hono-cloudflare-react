// import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'
import { resolve } from "node:path";
import cloudflare from '@hono/vite-cloudflare-pages'

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom']
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "src/index.tsx")
        server: 'src/index.tsx',
        client: 'src/client.tsx'
      }
    }
  },
  plugins: [
    // build(),
    cloudflare(),
    devServer({
      adapter,
      entry: 'src/index.tsx'
    })
  ]
})
