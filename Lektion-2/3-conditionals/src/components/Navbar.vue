<template>
  <nav>
    <div class="container">
      <h1>LOGO</h1>
      <ul v-if="!isLoggedIn">
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
      </ul>
      <ul v-else>
        <li><a href="#">Home</a></li>
        <li><a href="#">My page</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PrimaryNav',
  data() {
    return {
      isLoggedIn: false
    }
  }
}
</script>

<style scoped>
  nav {
    background-color: darkslateblue;
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
</style>