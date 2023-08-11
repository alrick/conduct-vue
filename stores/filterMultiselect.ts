import data from '~/static/filter.json'

export const useFilterMultiselectStore = defineStore('filterMultiselect', () => {

  const filtersData = data
    .map((item: any, index: number) => ({ ...item, order: index + 1, list: [] })) // assign order and add empty list
    .filter((item: any) => item.type === 'multiselect') // keep only multiselect items

  const filters: Ref<FilterMultiSelect[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.map(({ criteria, list }) => {
      const activeList = list.filter(option => option.active)
      return activeList.length > 0
        ? {  [criteria]: { _in: activeList.map(option => option.title) } }
        : { _or: [ { [criteria]: { _in: list.map(option => option.title) } }, { [criteria]: { _null: true } } ] }
    })
  })

  async function fetch() {
    const { data } = await useAsyncGql('GetMultiSelectOptions')

    filters.value.forEach(filter => {
      let criteriaValues: string[] = []
      data.value.filters.forEach(item => {
        const value = item[filter.criteria as keyof typeof item]
        if (value) {
          criteriaValues.push(value)
        }
      })
      const sortedValues = sanitizeAndSort(criteriaValues)
      filter.list = sortedValues.map(value => ({ title: value, active: false }))
    })
  }

  function setActive(filter: FilterMultiSelect, option: Option) {
    const filterOption = filter.list.find(opt => opt.title === option.title)
    if (filterOption) {
      filterOption.active = true
    }
  }

  function removeActive(filter: FilterMultiSelect, option: Option) {
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

  return { filter, filters, fetch, setActive, removeActive, reset, resetAll }

})