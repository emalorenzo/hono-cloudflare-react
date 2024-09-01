import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      compilerOptions: {
        jsx: 'react-jsx',
        jsxImportSource: 'react'
      },
      // esbuild: {
      //   jsxImportSource: 'react'
      // },
      build: {
        // manifest: true,
        rollupOptions: {
          input: './src/client.tsx'
        }
      }
    }
  } else {
    return {
      plugins: [
        build(),
        devServer({
          adapter,
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})
