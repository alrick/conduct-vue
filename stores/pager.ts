import { storeToRefs } from "pinia"

export const usePagerStore = defineStore('pager', () => {
  const filterStore = useFilterStore()
  const { filter } = storeToRefs(filterStore)

  const limit = 50
  const page = ref(1)
  const total = ref(1) // total entities of current set (with filters applied)
  const max = computed(() => Math.ceil(total.value / limit))

  watch(
    [() => filter.value],
    () => {
      goTo(1)
    }
  )

  function prev() {
    if (page.value > 1) {
      page.value--
    }
  }

  function next() {
    if (page.value < max.value) {
      page.value++
    }
  }

  function goTo(p: number) {
    if (p > 0 && p <= max.value) {
      page.value = p
    }
  }

  return { page, limit, total, max, prev, next, goTo }
})