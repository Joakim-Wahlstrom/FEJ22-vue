<template>
  <div class="container mt-5">
    <button @click="change('Login')" class="btn btn-sm btn-outline-primary">Login</button>
    <button @click="change('Register')" class="btn btn-sm btn-primary">Register</button>
    <div class="border border-primary p-4">
      <!-- <keep-alive> -->
        <component :is="comp" />
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import SignUpForm from './components/SignUpForm.vue'
export default {
  components: { 
    Login: LoginForm,
    Register: SignUpForm
  },
  data() {
    return {
      // isLogin: false,
      comp: 'Login'
    }
  },
  methods: {
    change(val){
      this.comp = val
    }
  }
}
</script>

<style>

</style>
