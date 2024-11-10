// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

// Look at the docs !!
// 
// https://getbootstrap.com/docs/5.2/getting-started/vite/
// https://vitejs.dev/config/
// https://vitejs.dev/guide/env-and-mode.html#env-files
// 
export default defineConfig({
  root: resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    minify: false,
  },
  // fixes sass 2.0 deprecation bug
  // https://stackoverflow.com/questions/78997907/the-legacy-js-api-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern',
        silenceDeprecations: ["legacy-js-api"],
      }
    }
  },
  plugins: [],
  define: { 
    'process.env': {},
  },
  resolve: {
    alias: {
      '~bootstrap': resolve(dirname(fileURLToPath(import.meta.url)), 'node_modules/bootstrap'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  }
})
