import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The CNAME puts the album at the root of its own domain, so paths are absolute
// from '/' -- the /<repo>/ prefix a bare github.io project site needs would be a
// path that does not exist there.
export default defineConfig({
  plugins: [react()],
})
