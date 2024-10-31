<script setup lang="ts">
defineProps<{
  property: Property
  header?: boolean
}>()
</script>

<template>
  <div class="flex pb-2">
    <div :class="{ 'mr-11': header }" class="w-1/3 text-sm font-medium mr-6">
      {{ property.title }}
    </div>
    <div :class="{ 'max-h-16 overflow-hidden': header }" class="w-2/3 has-links">
      <div v-if="property.value && property.html" v-html="property.value"></div>
      <div v-else-if="typeof property.value === 'boolean'">
        <DetailsPropertyBoolean :value="property.value" />
      </div>
      <div v-else-if="property.value">{{ property.value }}</div>
      <div v-else class="text-gray-500">None</div>
    </div>
  </div>
</template>

<style scoped>
.has-links :deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
:deep(p) {
  @apply mb-2;
}
</style>