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
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 w-96 shadow-xl">
      <div class="max-h-96 overflow-auto">
        <ul>
          <li v-for="edition in editions" :key="edition.id" class="">
            <NuxtLink :to="`/collection/${edition.id}`" class="edition px-4 py-2 flex">
              <div class="mr-4">{{ edition.title }}</div>
              <div class="flex-grow"></div>
              <div class="text-xs opacity-50">
                Edition<br>
                n° {{ edition.number }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edition:hover {
  @apply bg-base-200;
}
</style>