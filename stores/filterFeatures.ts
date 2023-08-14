import data from '~/static/filter.json'

export const useFilterFeaturesStore = defineStore('filterFeatures', () => {

  const filtersData = data
  .map((item: any, index: number) => ({
    ...item,
    criteria: '',
    order: index + 1,
    list: item.list ? item.list.map((feature: any, index: number) => ({
      id: index + 1,
      title: feature.title,
      active: false,
      criteria: feature.criteria,
    })) : undefined
  }))
  .filter((item: any) => item.type === 'features')

  const filters: Ref<FilterMultiSelect[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.flatMap(({ list }) => { // Note: use of flatMap
      const activeList = list.filter(option => option.active)
      if (activeList.length > 0) {
        return {
          _and: activeList.map(option => {
            return option.criteria ? { [option.criteria]: { _eq: true } } : null
          }).filter(Boolean)
        }
      }
      return []
    }).filter(Boolean)
  })

  function setActive(filter: FilterMultiSelect, option: FilterOption) {
    const filterOption = filter.list.find(opt => opt.title === option.title)
    if (filterOption) {
      filterOption.active = true
    }
  }

  function removeActive(filter: FilterMultiSelect, option: FilterOption) {
    const filterOption = filter.list.find(opt => opt.title === option.title)
    if (filterOption) {
      filterOption.active = false
    }
  }

  function reset(filter: FilterMultiSelect) {
    filter.list.forEach(option => {
      option.active = false
    })
  }

  function resetAll() {
    filters.value.forEach(filter => {
      reset(filter)
    })
  }

  return { filter, filters, setActive, removeActive, reset, resetAll }

})