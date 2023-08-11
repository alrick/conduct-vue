<script setup lang="ts">
defineProps({
  id: String
})
</script>

<template>
  <div class="text-lg breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/collection">Collection</NuxtLink>
      </li>
      <li>ID#{{ id }}</li>
    </ul>
  </div>
</template>