export const usePageStore = defineStore('page', () => {
  const title = ref('Not found')
  const content = ref('')

  async function fetch(page: string) {
    let req
    switch (page) {
      case 'our-team':
        req = await useAsyncGql('GetOurTeam')
        break;
      case 'glossary':
        req = await useAsyncGql('GetGlossary')
        break;
      case 'case-studies':
        req = await useAsyncGql('GetCaseStudies')
        break;
      default:
        req = await useAsyncGql('GetAbout')
    }

    // Utilisation de data en dehors du switch
    title.value = req.data.value.page?.title || ''
    content.value = req.data.value.page?.content || ''
  }

  return { title, content, fetch }
})
