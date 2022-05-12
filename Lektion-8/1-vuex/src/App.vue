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
  .btn {
    margin: 1rem 0 0 1rem;
    padding: .5rem .8rem;
    border-radius: .7rem;
    border: none;
    outline: none;
    background-color: #201d1d;
    color: #fff;
    cursor: pointer;
  }
  .btn:hover {
    box-shadow: 0 0 5px 0 #201d1d;
  }
  .btn:active {
    background-color: #000;
    box-shadow: none;
  }
</style>
