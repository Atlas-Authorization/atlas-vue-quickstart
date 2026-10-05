import { createAtlas } from '@atlasauth/vue';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

/**
 * `createAtlas()` is the Vue plugin peer of React's `<AtlasProvider>`: it
 * installs the reactive client, provides it for the composables, paints the
 * appearance tokens, and boots the session in the browser.
 */
createApp(App)
  .use(router)
  .use(
    createAtlas({
      publishableKey: import.meta.env.VITE_ATLAS_PUBLISHABLE_KEY ?? '',
      frontendApi: import.meta.env.VITE_ATLAS_FRONTEND_API || undefined,
    }),
  )
  .mount('#app');
