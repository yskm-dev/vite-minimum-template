import { defineConfig } from "vite";
import sassGlobImports from "vite-plugin-sass-glob-import";

import path from "path";
const srcPath = "./src";
const distPath = "./dist";

export default defineConfig({
  base: "./",
  root: path.resolve(__dirname, srcPath),
  publicDir: path.resolve(__dirname, "./public"),
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, distPath),
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = "fonts";
          }
          if (/css/i.test(extType)) {
            extType = "css";
          }
          if (/js/i.test(extType)) {
            extType = "js";
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: (chunkInfo) => {
          return "assets/js/[name].js";
        },
        entryFileNames: (entryInfo) => {
          return "assets/js/[name].js";
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@styles",
        replacement: new URL("./src/assets/scss", import.meta.url).pathname,
      },
      {
        find: "@script",
        replacement: new URL("./src/assets/js", import.meta.url).pathname,
      },
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), "node_modules/$1"),
      },
    ],
  },
  plugins: [sassGlobImports()],
  server: {
    cors: true,
    port: 8000,
  },
});
