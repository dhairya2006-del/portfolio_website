import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ---------------------------------------------------------------------------
// GitHub Pages deploy config
//
// If you deploy to a PROJECT page   -> https://<user>.github.io/<REPO_NAME>/
//   set REPO_NAME below to your repo's exact name.
// If you deploy to a USER/ORG page  -> https://<user>.github.io/
//   (repo must be named exactly "<user>.github.io")
//   set REPO_NAME to '' (empty string).
// ---------------------------------------------------------------------------
const REPO_NAME = ''

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME ? `/${REPO_NAME}/` : '/',
})
