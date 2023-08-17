<script setup lang="ts">
const store = useGlobalStore()
</script>

<template>
  <footer class="footer p-10 bg-neutral text-neutral-content relative">
    <div>
      <p>
        Conduct Database
        <br/>Civility project
      </p>
    </div>
    <div>
      <span class="footer-title">Copyright</span>
      <div>
        <div class="flex items-center">
          <IconCopyright />
          <div v-html="store.copyright" class="ml-2"></div>
        </div>
      </div>
    </div>
  </footer>
</template>