<h1 align="center">Nuxt Share</h1>

<p align="center">
  Share components, composables and configuration across Nuxt apps using <strong>Nuxt Layers</strong>.
</p>

<p align="center">
  <a href="https://github.com/diogopaulino/nuxt-share/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/diogopaulino/nuxt-share/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Node.js 22+" src="https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white">
  <img alt="Nuxt 4" src="https://img.shields.io/badge/Nuxt-4.5-00DC82?logo=nuxt&logoColor=white">
</p>

## What it demonstrates

A practical **Nuxt 4 Layer** with a playground app consuming shared code from the parent layer.

It replaces the old copy/paste and package-linking experiment with the native Nuxt approach.

## Shared by the layer

```text
app/
├── components/
│   └── SharedBadge.vue
└── composables/
    └── useSharedMessage.ts

nuxt.config.ts
```

## Playground

```text
playground/
├── app/
│   └── app.vue
├── nuxt.config.ts
└── tsconfig.json
```

The playground extends the repository root:

```ts
export default defineNuxtConfig({
  extends: ['..']
})
```

## Quick start

```bash
npm install
npm run dev
```

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Run the playground |
| `npm run build` | Build the playground |
| `npm run typecheck` | Validate shared + playground code |

## When to use Layers

Layers are useful for sharing:

- components and composables
- common configuration
- layouts and pages
- design systems
- reusable app foundations

## Learn more

- [Nuxt Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Nuxt documentation](https://nuxt.com/docs/4.x)
