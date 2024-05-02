import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

import type { UserConfig, InlineConfig } from "vite";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    vitePluginSvgr(),
    tsconfigPaths(),
    visualizer({
      filename: "./dist/report.html",
      open: true,
      brotliSize: true,
    }),
  ],
  base: "/",
  server: {
    host: true,
    port: 3001,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/setupVitest.ts",
  },
} as VitestConfigExport);
