<script setup lang="ts">
const { id } = useRoute().params
const store = useItemStore()
const identifier = Array.isArray(id) ? id[0] : id
store.fetch(identifier)

const sectionRefs = ref<{ isChecked: Ref<boolean> }[]>([])

function checkAllCheckboxes(value: boolean) {
  sectionRefs.value.forEach(section => {
    section.isChecked = value
  })
}
</script>

<template>
  <div class="container mx-auto max-w-5xl">
    <DetailsBreadcrumbs :id="identifier" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10">
      <div v-if="store.item">
        <div class="mb-10">
          <DetailsHeader :item="store.item" />
        </div>
        <div class="text-right mb-2 flex">
          <div class="flex-grow"></div>
          <a @click="checkAllCheckboxes(true)" class="link mr-4 flex"><IconSquareRoundedPlus class="mr-2" /> Open all sections</a>
          <a @click="checkAllCheckboxes(false)" class="link flex"><IconSquareRoundedMinus class="mr-2" /> Close all sections</a>
        </div>
        <div class="join join-vertical w-full">
          <DetailsSection v-for="section in store.item.sections" :section="section" ref="sectionRefs" />
        </div>
        <div class="mt-8">
          <DetailsCopyright />
        </div>
      </div>
      <div v-else class="text-center">
        <span class="loading loading-bars w-28"></span>
      </div>
    </div>
  </div>
</template>