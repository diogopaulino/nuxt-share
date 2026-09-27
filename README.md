<h1 align="center">Nuxt Share</h1>

<p align="center">Share components, composables and configuration across Nuxt apps with Layers.</p>

<p align="center">
  <a href="https://github.com/diogopaulino/nuxt-share/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/diogopaulino/nuxt-share/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Node.js 22+" src="https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white">
  <img alt="Nuxt 4" src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt&logoColor=white">
</p>

## Overview

A practical Nuxt 4 Layer with a playground application consuming shared code from the repository root.

## Shared layer

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

The playground extends the root layer:

```ts
export default defineNuxtConfig({
  extends: ['..']
})
```

## Run

```bash
npm ci
npm run dev
```

## Quality

```bash
npm run check
```

This validates the shared layer and builds the playground.

## Good use cases

- shared components and composables
- common configuration
- layouts and pages
- design systems
- reusable application foundations

## Documentation

- [Nuxt Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Nuxt](https://nuxt.com/docs/4.x)
