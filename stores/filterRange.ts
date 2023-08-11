import data from '~/static/filter.json'

export const useFilterRangeStore = defineStore('filterRange', () => {

  const filtersData = data
    .map((item: any, index: number) => ({ ...item, order: index + 1, search: '' })) // assign order and add empty search
    .filter((item: any) => item.type === 'range') // keep only range items

  const filters: Ref<FilterRange[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.map(({ criteria, criteria2, v1, v2 }) => {
      const value1 = v1 !== '' ? parseInt(v1) : -9999
      const value2 = v2 !== '' ? parseInt(v2) : 9999

      return {
        _or: [
          { _and: [ { [criteria]: { _gte: value1 } }, { [criteria]: { _lte: value2 } } ] },
          { _and: [ { [criteria2]: { _gte: value1 } }, { [criteria2]: { _lte: value2 } } ] },
        ]
      }
    }).filter(Boolean);
  })

  function reset(filter: FilterRange) {
    filter.v1 = ''
    filter.v2 = ''
  }

  function resetAll() {
    filters.value.forEach(filter => {
      reset(filter)
    })
  }

  return { filter, filters, reset, resetAll }

})