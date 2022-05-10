<template>
  <nav class="navbar container">
    <h1 class="brand">Joakims Blog</h1>
    <form>
      <input type="search" class="form-control" placeholder="Search">
      <button class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <ul class="nav-links">
      <li><router-link to="/" class="link">Blogs</router-link></li>
      <li><router-link to="/create"><button class="btn btn-primary btn-large">Create new</button></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PrimaryNavigation'
}
</script>

<style scoped>

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
    margin-bottom: 3rem;
  }
  .brand {
    font-size: 2rem;
  }
  .nav-links {
    display: flex;
    list-style: none;
    align-items: center;
  }
  .link {
    color: #000;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    margin-right: 1rem;
  }
  .fa-magnifying-glass {
    font-size: 1rem;
  }
</style>