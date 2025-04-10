<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { useThemeStore } from './stores/themeStore'

export default {
  name: 'App',
  setup() {
    const themeStore = useThemeStore()
    themeStore.initializeTheme()
    return { themeStore }
  },
  mounted() {
    this.themeStore.initializeTheme()
  }
}
</script>

<style>
/* Global styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
}
</style>