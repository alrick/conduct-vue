<script setup lang="ts">
const collectionStore = useCollectionStore()
const store = usePagerStore()

function scrollToTop() {
  const element = document.getElementById('app');
  if (element) {
    element.scrollIntoView();
  }
}
</script>

<template>
  <div class="flex items-center">
    <p class="mr-4 hidden lg:block"><strong>{{ store.total }}</strong>&nbsp;results of&nbsp;<strong>{{ collectionStore.total }}</strong></p>
    <div v-if="store.max > 1" class="btn-group">
      <button @click="scrollToTop(); store.prev();" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == 1 }">
        <IconPrev />
      </button>
      <template v-for="p in store.max">
        <button @click="scrollToTop(); store.goTo(p)" class="btn btn-sm btn-ghost" :class="{ 'btn-active': p == store.page }">{{ p }}</button>
      </template>
      <button @click="scrollToTop(); store.next()" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == store.max }">
        <IconNext />
      </button>
    </div>
  </div>
</template>