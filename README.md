# atlas-vue-quickstart

A minimal Vite + Vue app pre-wired with [Atlas](https://atlasauth.net) auth,
using `@atlasauth/vue`.

## What it shows

- `src/main.ts` — `app.use(createAtlas({ publishableKey, frontendApi }))`, the
  Vue plugin peer of React's `<AtlasProvider>`.
- `src/App.vue` — a header gated with `<SignedOut>` / `<SignedIn>` and a
  `<UserButton>`.
- `src/views/Home.vue` — a public home page using the `useUser()` composable.
- `src/views/SignInView.vue` — the `<SignIn>` flow.
- `src/views/Dashboard.vue` — a protected route that waits for the session with
  `useAuth()` and redirects signed-out visitors to `/sign-in`.

## Run it

1. `npm install`
2. `cp .env.example .env`, then set `VITE_ATLAS_PUBLISHABLE_KEY` (and adjust
   `VITE_ATLAS_FRONTEND_API`) to the values from
   [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open the URL Vite prints (defaults to http://localhost:5173).
