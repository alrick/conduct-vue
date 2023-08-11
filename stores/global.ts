export const useGlobalStore = defineStore('global', () => {
  const title = ref('App')
  const longTitle = ref('')
  const shortDescription = ref('')
  const longDescription = ref('')
  const copyright = ref('')

  async function fetch() {
    const { data } = await useAsyncGql('GetGlobal')

    title.value = data.value.global?.title || ''
    longTitle.value = data.value.global?.long_title || ''
    shortDescription.value = data.value.global?.short_description || ''
    longDescription.value = data.value.global?.long_description || ''
    copyright.value = data.value.global?.copyright || ''
  }

  fetch()

  return { title, longTitle, shortDescription, longDescription, copyright }
})