import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: '../docs',
        assetsDir: 'assets',
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: true,
    },
});