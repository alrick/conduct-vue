<script setup lang="ts">
const store = useSorterStore()
</script>

<template>
  <a v-for="sorter in store.sorters" @click="store.setActive(sorter)" class="link mr-4" :class="{ 'link-primary': store.active === sorter }">
    <IconAscendingLetters v-if="sorter.type == 'letters'" class="inline" />
    <IconAscendingNumbers v-if="sorter.type == 'numbers'" class="inline" />
    <span class="hidden lg:inline">{{ sorter.title }}</span>
  </a>
</template>