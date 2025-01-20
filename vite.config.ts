import { defineConfig } from 'vite'
// import type { UserConfig as VitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'server/public',
    emptyOutDir: true
  }
})
