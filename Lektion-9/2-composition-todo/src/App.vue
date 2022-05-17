<template>
  <div class="container">
    <AddTodoForm />
  </div>
</template>

<script>
import { ref } from 'vue'
import AddTodoForm from './components/AddTodoForm.vue'
export default {
  components: {
    AddTodoForm
  },
  setup() {
    const todos = ref([
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
      { id: 3, title: 'Todo 3', completed: false }
    ])

    return { todos }
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
   margin: 5% 15%;
 }
</style>