<template>
  <form class="card form-card" @submit.prevent="handleSubmit">
    <h2 class="text-center">Login</h2>
    <div class="dropdown-divider mb-3"></div>
    <div class="input-group">
      <label for="email">Email: </label>
      <input class="form-control" type="text" id="email" v-model="formData.email">
    </div>
    <div class="input-group">
      <label for="password">Password: </label>
      <input class="form-control" type="text" id="password" v-model="formData.password">
    </div>
    <div class="input-group">
      <p>not a member? <span class="link" @click="$emit('change-form')">Sign Up</span></p>
    </div>
    <div class="d-flex">
      <button class="btn btn-outline ml-auto">Login</button>
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
      await authStore.login(formData.value)
      if(!authStore.error)
        emit('user-login')
    }

    return { formData, handleSubmit }
  }
}
</script>

<style>

</style>