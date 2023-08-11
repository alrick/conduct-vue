<script setup lang="ts">
const store = useGlobalStore()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold">{{ store.longTitle }}</h1>
        <div v-html="store.longDescription" class="py-6"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>