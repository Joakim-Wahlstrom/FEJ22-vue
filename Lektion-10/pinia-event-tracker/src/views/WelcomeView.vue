<template>
  <div>
    <LoginForm @user-login="handleLogin" @change-form="showLogin = false" v-if="showLogin" />
    <RegisterForm @user-login="handleLogin" @change-form="showLogin = true" v-else />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  components: { LoginForm, RegisterForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const handleLogin = () => {
      router.push({ name: 'events' })
    }

    return { showLogin, handleLogin }
  }

}
</script>

<style>
  .form-card {
    padding: 3rem;
  }
</style>