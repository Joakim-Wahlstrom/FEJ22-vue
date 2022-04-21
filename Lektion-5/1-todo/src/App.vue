<template>
  <AddTodoForm />
  <div class="container">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/Todos/TodoList.vue'
export default {
  components: {
    AddTodoForm,
    TodoList

  },
  data() {
    return {
      todos: [
        { id: '1', title: 'Todo Item One', completed: false },
        { id: '2', title: 'Todo Item Two', completed: true },
        { id: '3', title: 'Todo Item Three', completed: false },
        { id: '4', title: 'Todo Item Four', completed: true },
        { id: '5', title: 'Todo Item Five', completed: false },
      ]
    }
  }
}
</script>

<style>

</style>