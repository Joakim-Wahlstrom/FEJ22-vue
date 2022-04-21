<template>
  <AddTodoForm @add-todo="add" />
  <div class="container">
    <TodoList :todos="todos" @toggle-complete="toggleComplete" @delete-todo="deleteTodo" />
  </div>
  <teleport to="#modals">
    <Transition name="fade">
      <ErrorModal :showModal="showModal" @close-modal="showModal = false" />
    </Transition>
  </teleport>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import AddTodoForm from './components/AddTodoForm.vue'
import TodoList from './components/Todos/TodoList.vue'
import ErrorModal from './components/ErrorModal.vue'
export default {
  components: {
    AddTodoForm,
    TodoList,
    ErrorModal

  },
  data() {
    return {
      todos: [
        { id: '1', title: 'Todo Item One', completed: false },
        { id: '2', title: 'Todo Item Two', completed: true },
        { id: '3', title: 'Todo Item Three', completed: false },
        { id: '4', title: 'Todo Item Four', completed: true },
        { id: '5', title: 'Todo Item Five', completed: false },
      ],
      showModal: false
    }
  },
  methods: {
    add(title) {
      const todo = {
        id: uuidv4(),
        title,
        completed: false
      }
      this.todos.push(todo)
    },
    toggleComplete(todo) {
      todo.completed = !todo.completed
    },
    deleteTodo(_todo) {
      if(!_todo.completed) {
        this.showModal = true
        return
      }

      this.todos = this.todos.filter(todo => todo.id !== _todo.id)
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>