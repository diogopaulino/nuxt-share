<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), {
  label: 'Shared from the Nuxt layer'
})
</script>

<template>
  <span class="shared-badge">{{ label }}</span>
</template>

<style scoped>
.shared-badge {
  display: inline-flex;
  padding: .45rem .75rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font: 600 .875rem/1 system-ui, sans-serif;
}
</style>
