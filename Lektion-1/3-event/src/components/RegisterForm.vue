<template>
  <form @submit.prevent="handleSubmit" class="card text-center p-5">
    <p class="h3 mb-5">Register</p>

    <input type="text" placeholder="First Name" class="form-control mb-3" @keyup.a="logName">
    <input type="text" placeholder="Last Name" class="form-control mb-3" :value="lastName" ref="lastName" @keyup="handleChange">
    <input type="email" placeholder="Email" class="form-control mb-3" v-model="email">
    <input type="password" placeholder="Password" class="form-control mb-3" v-model="password">
    <button class="btn btn-primary mb-5">Register</button>
    <p>{{ lastName }}</p>
    <p>{{ email }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    logName(e) {
      console.log(e.key)
    },
    handleChange() {
      this.lastName = this.$refs.lastName.value
    },
    handleSubmit() {

      console.log(this.lastName, this.email, this.password)

      this.$refs.lastName.value = ''
      this.lastName = ''
      this.email = ''
      this.password = ''

      this.$refs.lastName.focus()
    }
  }
}
</script>

<style>

</style>