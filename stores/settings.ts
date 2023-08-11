export const useSettingsStore = defineStore('settings', () => {
  const theme = ref("light")

  function setLightTheme() {
    theme.value = "light"
  }

  function setDarkTheme() {
    theme.value = "dark"
  }

  return { theme, setLightTheme, setDarkTheme }
})