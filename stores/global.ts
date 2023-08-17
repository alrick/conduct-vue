export const useGlobalStore = defineStore('global', () => {
  const title = ref('App')
  const longTitle = ref('')
  const description = ref('')
  const copyright = ref('')

  async function fetch() {
    const { data } = await useAsyncGql('GetGlobal')

    title.value = data.value.global?.title || ''
    longTitle.value = data.value.global?.long_title || ''
    description.value = data.value.global?.description || ''
    copyright.value = data.value.global?.copyright || ''
  }

  fetch()

  return { title, longTitle, description, copyright }
})