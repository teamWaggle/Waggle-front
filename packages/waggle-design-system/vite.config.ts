import * as path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import libCss from "vite-plugin-libcss";

export default defineConfig({
  assetsInclude: ["/sb-preview/runtime.js"],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "waggle-desin-system",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "**/*.stories.tsx"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
    vitePluginSvgr(),
    tsconfigPaths(),
    libCss(),
  ],
});
