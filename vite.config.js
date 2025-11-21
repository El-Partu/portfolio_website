import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//       ],
//     });

// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
    server: {
        https: false,
        host: true,
    },
  base: process.env.NODE_ENV === 'production' ? process.env.APP_URL + '/' : '/',
});
