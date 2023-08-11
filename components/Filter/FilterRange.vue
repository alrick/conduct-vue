<script setup lang="ts">
defineProps<{
  filter: FilterRange
}>()

const store = useFilterRangeStore()
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': filter.v1 || filter.v2 }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconBracketsContain />
      {{ filter.title }}&nbsp;
      <template v-if="filter.v1 || filter.v2">
        (
          <IconMathEqualGreater v-if="!filter.v2" />
          <IconMathEqualLower v-if="!filter.v1" />
          <span v-if="filter.v1">{{ formatDate(parseInt(filter.v1)) }}</span>
          <span v-if="filter.v1 && filter.v2">&#8211;</span>
          <span v-if="filter.v2">{{ formatDate(parseInt(filter.v2)) }}</span>
        )
      </template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <p v-if="filter.info" class="text-sm italic">{{ filter.info }}</p>
        <div class="flex items-center">
          <input v-model="filter.v1" type="text" class="input input-bordered w-20" />
          <div class="mx-2">&#8211;</div>
          <input v-model="filter.v2" type="text" class="input input-bordered w-20" />
        </div>
        <div>
          <a @click="store.reset(filter)" class="link text-sm">Reset</a>
        </div>
      </div>
    </div>
  </div>
</template>