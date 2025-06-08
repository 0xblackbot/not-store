import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {visualizer} from 'rollup-plugin-visualizer';
import {defineConfig} from 'vite';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';
import Terminal from 'vite-plugin-terminal';

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.VITE_BASE_URL ?? '/',
    plugins: [
        react(),
        mkcert({force: true}),
        Terminal(),
        tailwindcss(),
        svgr(),
        visualizer({open: true})
    ],
    build: {
        minify: 'terser'
    }
});
