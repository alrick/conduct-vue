import { storeToRefs } from 'pinia'

export const useCollectionStore = defineStore('collection', () => {
  const sorterStore = useSorterStore()
  const pagerStore = usePagerStore()
  const filterStore = useFilterStore()

  const { sort } = storeToRefs(sorterStore)
  const { page } = storeToRefs(pagerStore)
  const { filter } = storeToRefs(filterStore)

  const items: Ref<Item[]> = ref([])
  const total = ref(1)

  watch(
    [() => sort.value, () => page.value, () => filter.value],
    () => {
      fetch()
    }
  )

  async function fetch() {
    const { data } = await useAsyncGql('GetBooks', {
      limit: pagerStore.limit,
      page: pagerStore.page,
      sort: sorterStore.sort,
      filter: filterStore.filter
    })
    total.value = data?.value?.books_aggregated[0]?.count?.id || 0
    pagerStore.total = data?.value?.total?.length || 0

    items.value = data?.value?.books.map((itemData: any) => {
      return {
        id: itemData.id,
        title: itemData.short_title,
        date: itemData.date_of_imprint,
        author: {
          name: itemData.author_modern_attribution,
          gender: itemData.implied_gender_of_author
        },
        editions: itemData.other_editions.map((editionData: any) => {
          return {
            id: editionData.id,
            title: editionData.short_title,
            number: editionData.post_1500_edition_number
          }
        })
      }
    })
  }

  fetch()

  return { items, total }
})