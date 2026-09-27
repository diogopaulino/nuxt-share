# nuxt-share

A modern **Nuxt 4 layer** showing the current way to share components, composables and configuration between Nuxt applications.

## Stack

- Nuxt 4.5.2
- Nuxt Layers
- Vue 3
- TypeScript
- Node.js 22+

## What is shared

- `app/components/SharedBadge.vue`
- `app/composables/useSharedMessage.ts`
- root `nuxt.config.ts`

The `playground/` app extends the layer and demonstrates both shared pieces.

## Run

```bash
npm install
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```

This replaces the old link-only research repository with an executable example based on Nuxt Layers.

Docs: https://nuxt.com/docs/4.x/getting-started/layers
