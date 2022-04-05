<template>
  <Navbar />
  <TestimonialGroup />
  <Footer />
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/navigation/Footer.vue'
import TestimonialGroup from './components/Tesimonials/TestimonialGroup.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    TestimonialGroup
  }
}
</script>

<style>

</style>
