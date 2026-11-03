import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portafolio-/",
  build: {
    minify: "esbuild",
    cssMinify: true,
  },
});