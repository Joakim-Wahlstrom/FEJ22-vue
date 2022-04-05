<template>
  <HeroSection />
  <div class="container mt-5">
    <RegisterForm />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import RegisterForm from './components/RegisterForm.vue'
export default {
  components: { HeroSection, RegisterForm },

}
</script>

<style>

</style>