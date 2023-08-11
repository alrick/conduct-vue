<script setup lang="ts">
const store = useGlobalStore()
</script>

<template>
  <div class="alert">
    <IconCopyright class="text-primary" />
    <div v-html="store.copyright"></div>
  </div>
</template>