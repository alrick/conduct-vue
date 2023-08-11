<script setup lang="ts">
defineProps<{
  section: Section
}>()

const isChecked = ref(false)
defineExpose({ isChecked })
</script>

<template>
  <div class="collapse collapse-plus join-item border bg-base-200">
    <input type="checkbox" v-model="isChecked" />
    <div class="collapse-title">
      <div class="text-xl font-medium underline">{{ section.title }}</div>
      <div v-if="!isChecked" class="mt-4">
        <DetailsProperty :property="section.properties[0]" :header="true" />
      </div>
    </div>
    <div class="collapse-content">
      <DetailsProperty v-for="property in section.properties" :property="property" />
    </div>
  </div>
</template>