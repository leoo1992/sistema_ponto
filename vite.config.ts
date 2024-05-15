import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['styled-components', 'react-data-table-component'],
  },
  build: {
    rollupOptions: {
      external: ['styled-components', 'react-data-table-component'],
    },
  },
});
