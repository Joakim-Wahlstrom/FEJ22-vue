<template>
  <div class="app">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <button @click="showModal2 = true">Show modal2</button>

    <Modal v-if="showModal" @close="showModal = false" />

    <Modal v-if="showModal2" @close="showModal2 = false">
      <template v-slot:links>
        <a href="#">My website</a>
        <a href="#">Google</a>
      </template>
      <form>
        <h2>Login</h2>
        <label class="input-group">
          <p>Email: </p>
          <input type="email" class="form-control">
        </label>
        <label class="input-group">
          <p>Password: </p>
          <input type="password" class="form-control">
        </label>
      </form>
      <button @click="showModal2 = false">Close Modal</button>
    </Modal>
  </div>
  <a href="#">Yahoo</a>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      showModal2: false,
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .app {
  position: relative;
  right: 10rem;
} */
button {
  padding: .6em 1.2em;
  border: 0;
  border-radius: .5em;
  cursor: pointer;
  margin: 1rem;
  background-color: orangered;
  color: #fff;
}
</style>
