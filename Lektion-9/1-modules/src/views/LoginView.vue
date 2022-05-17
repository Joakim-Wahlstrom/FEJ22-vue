<template>
  <div class="container d-flex justify-content-center align-items-center wrapper">
    <div class="card w-50 p-5 border">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue'
export default {
  components: { LoginForm }
}
</script>

<style scoped>
  .wrapper {
    height: calc(100vh - 66.6px);
  }
</style>