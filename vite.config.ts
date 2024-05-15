import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['styled-components'],
  },
  build: {
    rollupOptions: {
      external: ['styled-components'],
    },
  },
});
