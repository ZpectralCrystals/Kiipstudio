import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SSG first: Astro renders every route to static HTML during `npm run build`.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Cloudflare quick tunnels use random *.trycloudflare.com hosts.
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
