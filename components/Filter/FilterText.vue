<script setup lang="ts">
defineProps<{
  filter: FilterText
}>()

const store = useFilterTextStore()
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': filter.search }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconForms />
      {{ filter.title }}&nbsp;
      <template v-if="filter.search">({{ filter.search }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <div class="form-control w-full max-w-xs">
          <input v-model="filter.search" :placeholder="filter.placeholder"  type="text" class="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <a @click="store.reset(filter)" class="link text-sm">Reset</a>
        </div>
      </div>
    </div>
  </div>
</template>