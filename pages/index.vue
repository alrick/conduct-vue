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
          <h1 class="text-5xl font-bold -mt-12 bg-neutral/75 p-2 text-slate-50">{{ store.longTitle }}</h1>
          <div v-html="store.description" class="text-justify mt-2 py-6"></div>
          <NuxtLink to="/collection" class="btn btn-primary">
            Browse collection
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>