import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// element 按需引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 插件
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        visualizer({
            open: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/style/_variables.scss";',
            },
        },
    },
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    // 代理
    server: {
        port: 9090,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'http://cw.qa.elonghotel.com',
                rewrite: (path) => path.replace(/^\/api/, ''),
                changeOrigin: true,
            },
        },
    },
});
