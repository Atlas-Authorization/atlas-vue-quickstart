<script setup lang="ts">
import { SignedIn, SignedOut, UserButton } from '@atlasauth/vue';
</script>

<template>
  <header
    style="max-width: 560px; margin: 1.5rem auto 0; display: flex; gap: 1rem; align-items: center; font-family: system-ui, sans-serif;"
  >
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <span style="margin-left: auto">
      <SignedOut><RouterLink to="/sign-in">Sign in</RouterLink></SignedOut>
      <SignedIn><UserButton /></SignedIn>
    </span>
  </header>
  <RouterView />
</template>
