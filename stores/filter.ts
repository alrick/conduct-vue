export const useFilterStore = defineStore('filter', () => {
  const stores = [
    useFilterMultiselectStore(),
    useFilterTextStore(),
    useFilterRangeStore(),
    useFilterMetadataStore(),
    useFilterFeaturesStore()
  ]

  const filter = computed(() => {
    const filtersFromStores = stores.map(store => store.filter).flat()
    return {
      _and: [
        ...filtersFromStores,
        { "post_1500_edition_number" : { "_eq": 1 } }
      ]
    }
  })

  const filters = computed(() => {
    const allFilters = stores.flatMap(store => store.filters as Filter[])
    return allFilters.sort((a, b) => (a.order || 0) - (b.order || 0))
  })

  async function initAll() {
    const initPromises = stores.map(store => 'init' in store ? store.init() : null).filter(Boolean)
    await Promise.all(initPromises)
  }

  function resetAll() {
    stores.forEach(store => store.resetAll && store.resetAll())
  }

  initAll()

  return { filter, filters, resetAll }
})
