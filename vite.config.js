// vite.config.js
import { defineConfig } from 'vite'


export default defineConfig({
    plugins: [],
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    build: {
        rollupOptions: {},
        lib: {
            entry: './src/ch.jsx',
            fileName: 'chbuild',
            formats: ['es'],
        },
    },
});