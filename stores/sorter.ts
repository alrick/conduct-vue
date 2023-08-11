import data from '~/static/sorter.json'

export const useSorterStore = defineStore('sorter', () => {

  const sorters: Ref<Sorter[]> = ref(data)
  const active = ref(sorters.value[0])

  const sort = computed(() => {
    return active.value.criteria
  })

  function setActive(sorter: Sorter) {
    active.value = sorter
  }

  return { sort, sorters, active, setActive }

})