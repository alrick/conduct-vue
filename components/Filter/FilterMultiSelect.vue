<script setup lang="ts">
const props = defineProps<{
  filter: FilterMultiSelect
}>()

const store = useFilterMultiselectStore()

const activeList = computed(() => {
  return props.filter.list.filter((option: Option) => option.active)
})

const inactiveList = computed(() => {
  return props.filter.list.filter((option: Option) => !option.active)
})

const active = computed(() => {
  return activeList.value.length
})
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': active }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconListDetails />
      {{ filter.title }}&nbsp;
      <template v-if="active">({{ active }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <div class="max-h-80 overflow-auto">
          <ul>
            <li v-for="option in activeList" @click="store.removeActive(filter, option)" class="px-2 pb-2 cursor-pointer flex items-center text-primary">
              <IconSquareRoundedCheck /> <div class="ml-2">{{ option.title }}</div>
            </li>
          </ul>
          <ul>
            <li v-for="option in inactiveList" @click="store.setActive(filter, option)" class="px-2 pb-2 cursor-pointer flex items-center">
              <IconSquareRounded /> <div class="ml-2">{{ option.title }}</div>
            </li>
          </ul>
        </div>
        <div>
          <a @click="store.reset(filter)" class="link text-sm">Reset</a>
        </div>
      </div>
    </div>
  </div>
</template>