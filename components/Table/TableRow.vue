<script setup lang="ts">
defineProps<{
  item: Item
}>()
</script>

<template>
  <tr>
    <td class="w-1/5">
      <div>
        <div>{{ item.author.name }}</div>
        <div class="text-sm opacity-50">{{ item.author.gender }}</div>
      </div>
    </td>
    <td class="w-3/5">
      <div>
        <NuxtLink :to="`/collection/${item.id}`" class="font-bold link text-base">{{ item.title }}</NuxtLink>
        <div>
          <Editions :editions="item.editions || []" />
        </div>
      </div>
    </td>
    <td class="w-1/5">
      {{ item.date }}
    </td>
  </tr>
</template>