<script setup lang="ts">
import { SignedIn, SignedOut, useUser } from '@atlasauth/vue';

const { user } = useUser();
</script>

<template>
  <main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
    <h1>atlas-vue-quickstart</h1>
    <p>A starter Vue app wired up with Atlas auth.</p>

    <SignedOut>
      <p>You are signed out. <RouterLink to="/sign-in">Sign in</RouterLink> to continue.</p>
    </SignedOut>

    <SignedIn>
      <p>Signed in as {{ user?.first_name ?? user?.id }}.</p>
      <p><RouterLink to="/dashboard">Go to your dashboard</RouterLink></p>
    </SignedIn>
  </main>
</template>
