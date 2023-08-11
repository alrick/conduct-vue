<script setup lang="ts">
const settings = useSettingsStore()
const global = useGlobalStore()
useHead({
  title: global.longTitle,
  meta: [
    { name: global.longTitle, content: global.shortDescription }
  ]
})
</script>

<template>
  <div id="app" :data-theme="settings.theme" class="bg-base-300">
    <Navbar />
    <div class="flex justify-center min-h-screen pt-24 px-8 mb-16">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
