import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), markdoc(), react(), keystatic()],
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
});
