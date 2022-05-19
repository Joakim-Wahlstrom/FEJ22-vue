<template>
<Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  setup() {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  .container {
    margin: 0 auto;
    padding-inline: 1rem;
    max-width: 900px;
  }
  .d-flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
    align-items: center;
  }
  .text-center {
    text-align: center;
  }
</style>