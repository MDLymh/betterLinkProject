import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',   // ESTE es el CSS que Tailwind va a procesar
                'resources/js/app.jsx',    // tu entrada de React
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@public_pages': path.resolve(__dirname, 'resources/js/public_pages'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
            '@styles': path.resolve(__dirname, 'resources/css'),
        },
    },
});
