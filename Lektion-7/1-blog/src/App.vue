<template>
<Navbar />
  <div class="container">
    <router-view />
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background-color: #e5e5ff;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .btn {
    padding: .6em 1.2em;
    border-radius: .5em;
    border: 0;
    font-weight: 700;
    cursor: pointer;
    background: transparent;
  }
  .btn-primary {
    background-color: #d3a718;
    color: #000000;
  }
  .btn-large {
    font-size: .9rem;
  }

  .form-control {
    font-size: 1rem;
    padding: .3em .5em;
    border: 1px solid #cecece;
    border-radius: .5em;
  }
  .form-control:focus {
    outline: 1px solid #6d6d6d;
  }
  .content_info,
  .content_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .8rem;
  }
  .content_info {
    margin-bottom: 2rem;
  }
  .content_list li {
    list-style: none;
    margin-right: 1rem;
    background-color: #333;
    color: #fff;
    padding: .2em 1em;
    border-radius: 100vh;
    cursor: pointer;
  }
</style>
