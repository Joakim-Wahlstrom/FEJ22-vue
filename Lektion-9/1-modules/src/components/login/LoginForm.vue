<template>
  <form @submit.prevent="handleSubmit"> 
    <h2 class="text-center mb-3">Login</h2>
       <!-- Email input -->
    <div class="mb-4">
      <label class="form-label" for="form1Example1">Email address</label>
      <input type="email" id="form1Example1" class="form-control" v-model="email" />
    </div>

    <!-- Password input -->
    <div class="mb-4">
      <label class="form-label" for="form1Example2">Password</label>
      <input type="password" id="form1Example2" class="form-control" v-model="password" />
    </div>

    <p class="text-danger text-center" v-if="error">You messed up</p>
    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
  </form>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  computed: {
    ...mapGetters(['adminCredentials'])
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      if(this.email === this.adminCredentials.email && this.password === this.adminCredentials.password) {
        this.login()
        this.error = false
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style>

</style>