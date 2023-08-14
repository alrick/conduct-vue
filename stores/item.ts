export const useItemStore = defineStore('item', () => {
  const item: Ref<Item|undefined> = ref()

  async function fetch(id: string) {
    item.value = undefined
    const { data } = await useAsyncGql('GetBook', { id: id })

    const itemData: any = data?.value?.book

    if (itemData) {
      item.value = {
        id: Number(id),
        title: itemData.short_title,
        subtitle: [
          itemData.author_modern_attribution,
          itemData.date_of_imprint
        ].filter(Boolean).join(', '),
        date: itemData.date_of_imprint,
        author: {
          name: itemData.author_modern_attribution,
          gender: itemData.implied_gender_of_author
        },
        sections: [
          {
            title: 'Section A. Basic details',
            properties: [
              { title: 'Short title', value: itemData.short_title },
              { title: 'Short title modern spelling', value: itemData.short_title_modern_spelling },
              { title: 'Full title original spelling', value: itemData.full_title_original_spelling },
              { title: 'Variant title / AKA', value: itemData.variant_title_or_aka },
              { title: 'Presence of date on imprint', value: itemData.presence_of_date_on_imprint },
              { title: 'Date of imprint', value: itemData.date_of_imprint },
              { title: 'All imprint text', value: itemData.all_imprint_text },
              { title: 'Date of London First edition', value: itemData.date_of_london_first_edition },
              { title: 'Post 1500 Edition Number', value: itemData.post_1500_edition_number },
              { title: 'Total Number of Editions', value: itemData.total_number_of_editions },
              { title: 'Wing STC N°', value: itemData.wing_stc_number },
              { title: 'ESTC Citation N°', value: itemData.estc_citation_no },
            ]
          },
          {
            title: 'Section B. Physical structure',
            properties: [
              { title: 'Format', value: itemData.format?.title },
              { title: 'Estimated total page number', value: itemData.estimated_total_page_number },
              { title: 'Unpaginated', value: itemData.unpaginated },
              { title: 'Paginated Roman Numerals', value: itemData.paginated_roman_numerals },
              { title: 'Paginated Arabic Numerals', value: itemData.paginated_arabic_numerals },
              { title: 'Number of Leaves', value: itemData.number_of_leaves },
            ]
          },
          {
            title: 'Section C. Title page information',
            properties: [
              { title: 'Ornament or Illustration on Title Page', value: itemData.ornament_or_illustration_on_title_page },
              { title: 'Description of Title Page Ornament/Illustration', value: itemData.tp_ornament_or_illustration, html: true },
              { title: 'Language of title', value: itemData.language_of_title?.title },
              { title: 'Language of first publication', value: itemData.language_of_first_publication?.title },
              { title: 'Other language of first publication', value: itemData.other_language_of_first_publication },
              { title: 'Author Title Page Attribution', value: itemData.author_title_page_attribution },
              { title: 'Author Modern Attribution', value: itemData.author_modern_attribution },
              { title: 'Implied Gender of Author', value: itemData.implied_gender_of_author },
              { title: 'Implied Status of Author on Title Page', value: itemData.implied_status_of_author_on_title_page },
              { title: 'Title Page Author Descriptor', value: itemData.title_page_author_descriptor, html: true },
              { title: 'Translation', value: itemData.translation },
              { title: 'Translator Attribution on Title Page', value: itemData.translator_attribution_on_title_page },
              { title: 'Modern Translator Attribution', value: itemData.modern_translator_attribution },
              { title: 'Latin on title Page', value: itemData.latin_on_title_page },
              { title: 'Greek on Title Page', value: itemData.greek_on_title_page },
              { title: 'Epigram/Epigraph on Title Page', value: itemData.epigram_epigraph_on_title_page },
              { title: 'Black Letter on Title page', value: itemData.black_letter_on_title_page },
            ]
          },
          {
            title: 'Section D. Generic features',
            properties: [
              {
                title: 'Genre',
                value: itemData.working_generic_labels?.join(', ')
              },
              { title: 'Direct Addressee', value: itemData.direct_addressee },
              { title: 'Direct Addressee Descriptor', value: itemData.direct_addressee_descriptor?.title },
            ]
          },
          {
            title: 'Section E. Further structural features',
            properties: [
              { title: 'Illustration', value: itemData.illustration },
              { title: 'Illustration Description', value: itemData.illustration_description, html: true },
              {
                title: 'Paratexts',
                value: itemData.paratexts?.map((paratext: Paratext) => paratext.paratexts_id?.title || '').join(', ')
              },
              { title: 'Other Paratexts', value: itemData.other_paratext },
              { title: 'Presence of books', value: itemData.presence_of_books },
              { title: 'Presence of chapters', value: itemData.presence_of_chapters },
              { title: 'Presence of letters', value: itemData.presence_of_letters },
              { title: 'Presence of sermons', value: itemData.presence_of_sermons },
              { title: 'Presence of stanzas', value: itemData.presence_of_stanzas },
              { title: 'Other divisions', value: itemData.other_divisions },
            ]
          },
          {
            title: 'Section F. Contextual notes',
            properties: [
              { title: 'Notes', value: itemData.notes, html: true }
            ]
          }
        ]
      }
    }
  }

  return { item, fetch }
})