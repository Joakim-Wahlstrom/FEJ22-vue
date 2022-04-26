<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
  <div>
    <h1>Footer</h1>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .d-flex {
    display: flex;
  }
</style>