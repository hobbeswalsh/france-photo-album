import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites under /<repo>/. Deriving it from the CI env
// means a repo rename needs no edit, and local builds stay at '/' for `vite preview`.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
  test: { environment: 'jsdom' },
})
