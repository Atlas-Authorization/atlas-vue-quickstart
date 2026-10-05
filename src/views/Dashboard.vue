<script setup lang="ts">
import { useAuth } from '@atlasauth/vue';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const { isLoaded, isSignedIn, userId, orgId } = useAuth();
const router = useRouter();

// Protect the route: once the session has loaded, bounce a signed-out visitor
// to the sign-in flow.
watchEffect(() => {
  if (isLoaded.value && !isSignedIn.value) {
    void router.replace('/sign-in');
  }
});
</script>

<template>
  <main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
    <template v-if="!isLoaded">
      <p>Loading…</p>
    </template>
    <template v-else-if="isSignedIn">
      <h1>Dashboard</h1>
      <p>This page is only reachable when you are signed in.</p>
      <p>
        Your user id is <code>{{ userId }}</code
        ><template v-if="orgId"> (org <code>{{ orgId }}</code>)</template>.
      </p>
    </template>
  </main>
</template>
