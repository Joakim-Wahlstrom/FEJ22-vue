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
  .m-auto {
    margin: auto;
  }
  .mt-1 {
    margin-top: 1rem;
  }
  .ml-1 {
    margin-left: 1rem;
  }
  .btn {
    padding: .4em 1em;
    border-radius: 100vh;
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  .btn-clear {
    font-size: 1rem;
    font-weight: bold;
  }
  .btn-outline {
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid #c2c2c2;
    transition: background-color 75ms ease-out;
  }
  .btn-outline:hover {
    background-color: #efefef;
  }
  .btn-outline:active {
    background-color: #b2b2b2;
  }
</style>