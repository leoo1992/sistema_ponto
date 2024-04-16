import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    replace({
      preventAssignment: true,
    }),
    terser(),
  ],
});
