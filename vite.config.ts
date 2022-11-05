import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression'//引入
import legacyPlugin from '@vitejs/plugin-legacy'
 
export default defineConfig({
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      //在plugins配置数组里添加gzip插件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      //在plugins配置数组里添加legacy插件
      legacyPlugin({
        targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
      }),
      vue()
    ],
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
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 1500
    }
});
