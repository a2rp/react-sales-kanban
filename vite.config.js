import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === "production" ? "/react-sales-kanban/" : "/",
    define: {
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    build: {
        sourcemap: false,
        minify: "esbuild",
    },
}));
