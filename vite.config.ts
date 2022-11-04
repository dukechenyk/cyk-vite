import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    base: "./",
    server: {
        host:"127.0.0.1",
        port: 1888,
        // 是否自动在浏览器打开
        open: false,
        // 是否开启 https
        https: false,
        proxy: {
            // '/api': {
            //     target: 'http://localhost:3333/',
            //     changeOrigin: true,
            //     rewrite: (pathStr) => pathStr.replace('/api', '')
            // },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "public": path.resolve(__dirname, "./public"),
        },
    },
    optimizeDeps: {
        include: [
        ],
    },
    build: {
        // 压缩
        minify: "esbuild",
        assetsDir: "",
        outDir: `./dist/`,
    },
});
