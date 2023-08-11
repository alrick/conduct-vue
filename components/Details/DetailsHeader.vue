<script setup lang="ts">
defineProps<{
  item: Item
}>()
</script>

<template>
  <h2 class="text-4xl font-bold leading-normal">
    {{ item.title }}
  </h2>
  <h3 v-if="item.subtitle" class="text-3xl">
    {{ item.subtitle }}
  </h3>
</template>