import data from '~/static/filter.json'

export const useFilterMetadataStore = defineStore('filterMetadata', () => {

  const filtersData = data
    .map((item: any, index: number) => ({ ...item, order: index + 1, list: [] })) // assign order and add empty list
    .filter((item: any) => item.type === 'metadata') // keep only metadata items

  const filters: Ref<FilterMetadata[]> = ref(filtersData)

  const filter = computed(() => {
    return filters.value.map(({ criteria, list, multi }) => {
      const activeList = list.filter(option => option.active)
      const idCondition = { "id": { _in: activeList.map(option => option.id) } }
      return activeList.length > 0
        ? { [criteria]: multi ? { [multi]: idCondition } : idCondition }
        : null
    }).filter(Boolean)
  })

  async function init() {
    const { data } = await useAsyncGql('GetMetadata')

    filters.value.forEach(filter => {
      const filterValues = data.value[filter.entity as keyof typeof data.value]
      filter.list = filterValues.map(value => {
        return {
          id: Number(value.id),
          title: value.title || '',
          active: false
        }
      })
    })
  }

  function setActive(filter: FilterMetadata, option: FilterOption) {
    const filterOption = filter.list.find(opt => opt.title === option.title)
    if (filterOption) {
      filterOption.active = true
    }
  }

  function removeActive(filter: FilterMetadata, option: FilterOption) {
    const filterOption = filter.list.find(opt => opt.title === option.title)
    if (filterOption) {
      filterOption.active = false
    }
  }

  function reset(filter: FilterMetadata) {
    filter.list.forEach(option => {
      option.active = false
    })
  }

  function resetAll() {
    filters.value.forEach(filter => {
      reset(filter)
    })
  }

  return { filter, filters, init, setActive, removeActive, reset, resetAll }

})