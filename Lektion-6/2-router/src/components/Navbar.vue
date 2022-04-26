<template>
  <nav class="navbar d-flex">
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'primaryNavigatation'
}
</script>

<style scoped>
  .navbar {
    justify-content: space-between;
    align-items: center;
    background-color: #2f4f32;
    color: #fff;
    padding: 0 1rem;
  }
  ul {
    list-style: none;
  }
  .link {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  .link:hover {
    background-color: #0000004b;
  }
  .router-link-exact-active {
    text-decoration: underline;
  }
</style>