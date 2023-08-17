<script setup lang="ts">
defineProps<{
  title: string,
  content: string
}>()
</script>

<template>
  <h1 class="text-5xl font-bold">{{ title }}</h1>
  <div v-html="content" class="py-6 text-justify"></div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>