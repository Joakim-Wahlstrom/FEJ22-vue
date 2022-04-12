<template>
  <Navbar title="Hello World" />

  <div class="container output">

    <Functions class="mt-5" />

    <TextInput class="mt-5" />

  </div>

  <Footer msg="message" />
  <Footer v-bind:msg="message" />
  <Footer :msg="message" />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Functions from './components/Functions.vue'
import TextInput from './components/TextInput.vue'
export default {
  components: { Navbar, Footer, Functions, TextInput },
  data() {
    return {
      message: 'Ett meddelande från data'
    }
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
  .output {
    min-height: 500px;
  }
  .mt-5 {
    margin-top: 3rem;
  }
</style>