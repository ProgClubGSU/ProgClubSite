// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://progsu.com",
  integrations: [
    react(),
    mdx(),
    sitemap(),
    tailwind({
      // Re-enable base styles since we've optimized critical CSS
      applyBaseStyles: true,
      // Use a custom config that doesn't conflict with critical CSS
      config: {
        corePlugins: {
          // Disable preflight since we handle base styles in critical CSS
          preflight: false,
        }
      }
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
      // Keep CSS code splitting disabled for consistency
      cssCodeSplit: false,
      // Disable minification - it breaks the form JavaScript
      minify: false,
      // Inline small CSS files to reduce requests
      assetsInlineLimit: 4096,
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
  // Build optimizations
  build: {
    // Inline stylesheets smaller than 8kb to reduce FOUC
    inlineStylesheets: 'always',
  },
  // Exclude studio from main site processing
  srcDir: './src',
  publicDir: './public',
});
