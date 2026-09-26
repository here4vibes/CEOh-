/**
 * Vite config for the Devvit webview build.
 * Outputs to devvit/webroot/ with relative asset paths so the bundle works
 * when served from Reddit's CDN inside the Devvit webview iframe.
 *
 * Build: vite build --config vite.devvit.config.ts
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  // Relative base is required — Devvit serves webroot assets from an opaque CDN path.
  base: "./",
  build: {
    outDir: resolve(__dirname, "devvit/webroot"),
    emptyOutDir: true,
  },
});
