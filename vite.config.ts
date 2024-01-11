import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [react(), vitePluginSvgr(), tsconfigPaths()],
	server: {
		port: 3000,
		proxy: {
			"/api": "http://13.124.182.138/",
		},
	},
});
