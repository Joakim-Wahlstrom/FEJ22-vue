<template>
  <div>
    <Header :title="title" />
    <div class="container">
      <User :user="user" />
      <UserTwo :user="user" />
    </div>
    <Footer :title="title" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import User from './components/User.vue'
import UserTwo from './components/UserTwo.vue'
export default {
  components: { Header, Footer, User, UserTwo },
  data() {
    return {
      title: 'FRONTEND 2022',
      user: {
        id: 1,
        name: 'Joakim',
        age: 35,
        email: 'joakim@mail.com'
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>