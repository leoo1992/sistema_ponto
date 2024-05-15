import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [],
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        globals: {
          
        },
      },
    },
  },
  define: {
    __DEV__: JSON.stringify(false),
  },
});
