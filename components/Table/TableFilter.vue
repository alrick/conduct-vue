<script setup lang="ts">
const store = useFilterStore()
</script>

<template>
  <template v-for="filter in store.filters" :key="filter.id">
    <FilterMultiSelect v-if="filter.type === 'metadata'" :filter="(filter as FilterMetadata)" />
    <FilterText v-if="filter.type === 'text'" :filter="(filter as FilterText)" />
    <FilterRange v-if="filter.type === 'range'" :filter="(filter as FilterRange)" />
    <FilterMultiSelect v-if="filter.type === 'features'" :filter="(filter as FilterMultiSelect)" />
  </template>
  <button @click="store.resetAll()" class="link ml-2">Reset all filters</button>
</template>

<style scoped>
:deep(.btn:hover) {
  @apply bg-gray-300;
}
:deep(.btn-primary:hover) {
  @apply bg-primary;
}
</style>