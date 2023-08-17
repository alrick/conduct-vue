<script setup lang="ts">
const settings = useSettingsStore()
const global = useGlobalStore()
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50 drop-shadow-md">
    <div class="navbar-start w-auto">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <Navmenu />
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        {{ global.title }}
      </NuxtLink>
      <ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
        <Navmenu />
      </ul>
    </div>
    <div class="flex-grow"></div>
    <div class="navbar-end w-fit ">
      <button v-if="settings.theme == 'light'" @click="settings.setDarkTheme" class="btn btn-circle btn-ghost">
        <IconSun />
      </button>
      <button v-if="settings.theme == 'dark'" @click="settings.setLightTheme" class="btn btn-circle btn-ghost">
        <IconMoon />
      </button>
    </div>
  </div>
</template>