<template>
  <div class="container">
    <AddTodoForm @add-todo="addTodo" />
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove-todo="removeTodo" @toggle-complete="toggleComplete" />
  </div>
</template>

<script>
import { ref } from 'vue'
import AddTodoForm from './components/AddTodoForm.vue'
import TodoItem from './components/TodoItem.vue'
export default {
  components: {
    AddTodoForm,
    TodoItem
  },
  setup() {
    const todos = ref([
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
      { id: 3, title: 'Todo 3', completed: false }
    ])

    const addTodo = (title) => {
      todos.value.push({ id: Date.now().toString(), title, completed: false })
    }

    const removeTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const toggleComplete = (todo) => {
      todo.completed = !todo.completed
    }

    return { todos, removeTodo, addTodo, toggleComplete }
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