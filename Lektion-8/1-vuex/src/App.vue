<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
