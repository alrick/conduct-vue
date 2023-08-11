<script setup lang="ts">
defineProps<{
  value: boolean
}>()
</script>

<template>
  <div v-if="value" class="flex items-center">
    <IconSquareRoundedCheck class="w-5 h-5" />
    <span class="ml-2">Yes</span>
  </div>
  <div v-else class="flex items-center">
    <IconSquareRoundedX class="w-5 h-5" />
    <span class="ml-2">No</span>
  </div>
</template>