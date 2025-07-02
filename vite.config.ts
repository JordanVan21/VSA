import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your actual repo name
const repoName = 'VSA';

export default defineConfig({
  base: `/${repoName}/`, // <-- important
  plugins: [react()],
})