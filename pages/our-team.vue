<script setup lang="ts">
const page = usePageStore()
page.fetch('our-team')
</script>

<template>
  <div class="container mx-auto max-w-3xl mt-10">
    <Page :title="page.title" :content="page.content" />
  </div>
</template>