// Hybrid rendering config - In Astro v5, hybrid is now built into static mode
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config  
export default defineConfig({
  output: "static", // Static with hybrid capabilities built-in
  adapter: vercel({
    webAnalytics: { enabled: true },
    functionPerRoute: false
  }),
  site: "https://proggsu.vercel.app",
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({
      // Re-enable base styles since we've optimized critical CSS
      applyBaseStyles: true,
    })
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },
  vite: {
    server: {
      watch: {
        // Ignore studio directory to prevent conflicts
        ignored: ['**/studio/**', '**/node_modules/**', '**/.git/**'],
        // Reduce CPU usage
        usePolling: false,
      },
    },
    build: {
      // Disable minification - it breaks the form JavaScript
      minify: false,
    },
    css: {
      // Transform CSS for better browser support
      transformer: 'postcss',
      // Optimize CSS processing
      devSourcemap: true,
    },
    // Optimize dependency handling
    optimizeDeps: {
      // Prevent dependency conflicts
      force: false,
      include: ['@astrojs/mdx', '@astrojs/tailwind'],
    },
  },

  // Exclude studio from main site processing
  srcDir: './src',
  publicDir: './public',
});
