import data from '~/static/filter.json'

export const useFilterTextStore = defineStore('filterText', () => {

  const filtersData = data
    .map((item: any, index: number) => ({ ...item, order: index + 1, search: '' })) // assign order and add empty search
    .filter((item: any) => item.type === 'text') // keep only text items

  const filters: Ref<FilterText[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.flatMap(({ criteria, search }) => {
      if (search === '') return [];

      const orConditions = criteria.map((criterion: string) => ({
        [criterion]: { _contains: search }
      }));

      return orConditions.length ? { _or: orConditions } : null;
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