<script setup lang="ts">
const message = useSharedMessage()
</script>

<template>
  <main>
    <SharedBadge />
    <h1>{{ message }}</h1>
    <p>This app consumes the component and composable from the parent Nuxt layer.</p>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}
main {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 1rem;
  padding: 2rem;
}
h1, p {
  margin: 0;
}
</style>
