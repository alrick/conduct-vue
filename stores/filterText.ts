import data from '~/static/filter.json'

export const useFilterTextStore = defineStore('filterText', () => {

  const filtersData = data
    .map((item: any, index: number) => ({ ...item, order: index + 1, search: '' })) // assign order and add empty search
    .filter((item: any) => item.type === 'text') // keep only text items

  const filters: Ref<FilterText[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.map(({ criteria, search }) => {
      return search != ''
        ? { [criteria]: { _contains: search } }
        : null;
    }).filter(Boolean);
  })

  function reset(filter: FilterText) {
    filter.search = ''
  }

  function resetAll() {
    filters.value.forEach(filter => {
      reset(filter)
    })
  }

  return { filter, filters, reset, resetAll }

})