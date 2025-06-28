import { defineConfig } from 'vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [viteCommonjs(), dynamicImport()],
});
