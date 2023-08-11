<script setup lang="ts">
const store = useGlobalStore()
</script>

<template>
  <div>
    <div class="h-2/5 overflow-hidden">
      <img class="w-full" src="~/assets/img/canvas.png" />
    </div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold -mt-12 bg-primary/75 p-2 text-slate-50 -skew-y-3">{{ store.longTitle }}</h1>
          <div v-html="store.shortDescription" class="mt-2 py-6"></div>
          <NuxtLink to="/collection" class="btn btn-primary">
            Browse collection
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>