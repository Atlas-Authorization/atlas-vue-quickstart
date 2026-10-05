import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import SignInView from './views/SignInView.vue';

/**
 * Plain client routing. Route protection is enforced inside Dashboard.vue with
 * the `useAuth()` composable (it waits for the session to load, then redirects a
 * signed-out visitor) — the Vue peer of a `<Protect>` gate.
 */
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/sign-in', component: SignInView },
    { path: '/dashboard', component: Dashboard },
  ],
});
