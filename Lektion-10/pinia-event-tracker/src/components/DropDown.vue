<template>
  <div class="dropdown-container">
    <div class="dropdown text-center">
      <div class="avatar-container m-auto">
        <img src="Jag.png" class="avatar" alt="avatar">
      </div>
      <p class="name mt-1">{{ name }}</p>
      <p class="mail">{{ email }}</p>
      <router-link to="/pastevents" class="link mt-1" >View past events</router-link>
      <div class="dropdown-divider"></div>
      <button class="btn btn-outline" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
export default {
  setup(props, { emit }) {
    const router = useRouter()
    const authStore = useAuthStore()
    const { name, email } = storeToRefs(authStore)

    const logout = () => {
      authStore.$reset()
      localStorage.removeItem('token')
      emit('close-dropdown')
      router.replace({ name: 'welcome' })
    }

    return { logout, name, email }
  }
}
</script>

<style>
  .navbar .dropdown-container {
    position: relative;
  }
  .dropdown-bg {
    background-color: transparent;
    position: fixed;
    inset: 0;
  }
  .dropdown {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(110%);
    padding: 2rem;
    background-color: #fff;
    border-radius: 1rem;
    border: 1px solid #c2c2c2;
    min-width: 230px;
  }
  .dropdown-divider {
    height: 1px;
    background-color: #c2c2c2;
    width: 100%;
    margin-block: 1rem;
  }
  .navbar .dropdown .avatar-container {
    width: 70px;
    cursor: auto;
  }

  .navbar .dropdown .name {
    font-weight: bold;
  }
  .navbar .dropdown .mail {
    color: #414141;
  }
  .link {
    color: #000000;
    font-weight: bold;
    display: inline-block;
    cursor: pointer;
  }
</style>