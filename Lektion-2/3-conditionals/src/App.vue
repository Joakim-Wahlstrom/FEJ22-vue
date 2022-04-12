<template>
  <Navbar />
  <div class="container">
    <h1 v-if="name === 'Joakim'">Hej {{ name }}, välkommen tillbaka</h1>
    <h1 v-else>Trevligt att träffas {{ name }}</h1>

    <TodosList :todos="todos" />

    <div class="mt">
      <input type="text">
      <button @click="error = !error">Toggle error</button>
      <button @click="success = !success">Toggle success</button>
<!-- 
      <p v-if="error">Någonting blev fel</p>
      <p v-if="success">Jippi det fungerar</p> -->
      
      <p v-show="error">Någonting blev fel</p>
      <p v-show="success">Jippi det fungerar</p>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import TodosList from './components/TodosList.vue'
export default {
  components: { Navbar, TodosList },
  data() {
    return {
      name: 'Joakim',
      todos: [
        {title: 'Todo item 1'},
        {title: 'Todo item 2'},
        {title: 'Todo item 3'},
      ],
      error: false,
      success: false
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
  .mt {
    margin-top: 2rem;
  }
</style>