import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const plugins = [react(), tailwindcss()]

  // Only use Cloudflare plugin when not deploying to Vercel
  if (!process.env.VERCEL && process.env.CF_PAGES !== '1') {
    try {
      const { cloudflare } = await import('@cloudflare/vite-plugin')
      plugins.push(cloudflare())
    } catch {
      // Ignore if plugin not available
    }
  }

  return {
    plugins,
    server: { port: 5173, strictPort: false },
  }
})
