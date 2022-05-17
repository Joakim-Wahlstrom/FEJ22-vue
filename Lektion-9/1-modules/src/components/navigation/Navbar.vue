<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="loggedIn" class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/users">Users</router-link>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link class="nav-link" active-class="active" aria-current="page" to="/">Login</router-link>
          </li>
          <li v-else class="nav-item">
            <router-link @click="logout" class="btn btn-light" aria-current="page" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PrimaryNavigation',
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>

</style>