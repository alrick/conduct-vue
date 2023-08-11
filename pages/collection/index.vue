<script setup lang="ts">
const store = useCollectionStore()
</script>

<template>
  <div class="max-w-screen-2xl grow">
    <div class="flex my-4">
      <TableSorter />
      <div class="grow"></div>
      <TablePager />
    </div>
    <div class="flex flex-col flex-wrap lg:flex-row my-4">
      <TableFilter />
    </div>
    <table class="table w-full bg-base-100">
      <thead class="sticky top-16 z-20 bg-base-200">
        <tr>
          <th class="text-base">Author</th>
          <th class="text-base">Title</th>
          <th class="text-base hidden lg:table-cell">Date of First London Edition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="store.items?.length === 0">
          <td class="font-semibold">No result</td>
        </tr>
        <TableRow v-for="item in store.items" :key="item.id" :item="item" />
      </tbody>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <TablePager v-if="store.total > 10" />
    </div>
  </div>
</template>