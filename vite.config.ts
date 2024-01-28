import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, 'src/assets/images'),
      },
      {
        find: '@icons',
        replacement: path.resolve(__dirname, 'src/assets/icons'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
    ],
  },
  assetsInclude: ['**/*.glb'],
  base: 'https://evairmacollunco.com/',
});
