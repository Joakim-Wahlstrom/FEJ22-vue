<template>
  <form class="card form-card" @submit.prevent="handleSubmit">
    <h2 class="text-center">Register a new account</h2>
    <div class="dropdown-divider mb-3"></div>
    <div class="input-group">
      <label for="name">Full Name: </label>
      <input class="form-control" type="text" id="name" v-model="formData.name">
    </div>
    <div class="input-group">
      <label for="email">Email: </label>
      <input class="form-control" type="text" id="email" v-model="formData.email">
    </div>
    <div class="input-group">
      <label for="password">Password: </label>
      <input class="form-control" type="text" id="password" v-model="formData.password">
    </div>
    <div class="input-group">
      <p>already a member? <span class="link" @click="$emit('change-form')">Sign In</span></p>
    </div>
    <div class="d-flex">
      <button class="btn btn-outline ml-auto">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useAuthStore } from '@/stores/auth'
export default {
  setup(props, { emit }) {
    const authStore = useAuthStore()

    const formData = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleSubmit = async () => {
      await authStore.registerUser(formData.value)
      if(!authStore.error) {
        emit('user-login')
      }
    }

    return { formData, handleSubmit }
  }
}
</script>

<style>

</style>