<script setup lang="ts">
const { editions } = defineProps<{
  editions: Edition[]
}>()

const label = computed(() => {
  return editions.length === 1 ? 'edition' : 'editions'
})
</script>

<template>
  <div v-if="editions.length" class="dropdown">
    <label tabindex="0" class="link flex items-center">
      {{ editions.length }} more {{ label }}
      <IconCaretDown class="w-4" />
    </label>
    <ul tabindex="0" class="dropdown-content z-[1] menu menu-compact p-2 shadow bg-base-100 rounded-box w-96">
      <li v-for="edition in editions" :key="edition.id">
        <NuxtLink :to="`/collection/${edition.id}`" class="flex">
          <div>{{ edition.title }}</div>
          <div class="flex-grow"></div>
          <div class="text-xs opacity-50">
            Edition<br>
            n° {{ edition.number }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>