<template>
  <AddTodoForm @add-todo="add" @sort="sortTodos" />
  <div class="container">
    <TodoList :value="sort" :todos="todos" @toggle-complete="toggleComplete" @delete-todo="deleteTodo" />
  </div>
  <teleport to="#modals">
    <Transition name="fade">
      <ErrorModal :showModal="showModal" @close-modal="showModal = false" />
    </Transition>
  </teleport>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
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
      // todos: [
      //   { id: '1', title: 'Todo Item One', completed: false },
      //   { id: '2', title: 'Todo Item Two', completed: true },
      //   { id: '3', title: 'Todo Item Three', completed: false },
      //   { id: '4', title: 'Todo Item Four', completed: true },
      //   { id: '5', title: 'Todo Item Five', completed: false },
      // ],
      todos: [],
      sort: '',
      showModal: false,
      apiURL: 'http://localhost:8080/api/todos/'
    }
  },
  methods: {
    sortTodos(val) {
      switch(val) {
        case 'false':
          this.sort = false
          break

        case 'true': 
          this.sort = true
          break
        
        default:
          this.sort = ''
      }
    },
    async fetchTodos() {
      const res = await axios.get(this.apiURL)
      // console.log(res)
      this.todos = res.data
    },
    async add(title) {
      // const todo = {
      //   id: uuidv4(),
      //   title,
      //   completed: false
      // }
      // this.todos.push(todo)

      try {
        const res = await axios.post(this.apiURL, { title })
        if(res.status === 201) {
          this.todos.push(res.data)
        }
      } catch(err) {
        console.log(err)
      }
    },
    async toggleComplete(todo) {
      const res = await axios.put(this.apiURL + todo._id, { completed: !todo.completed })

      if(res.status === 200) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo(_todo) {
      if(!_todo.completed) {
        this.showModal = true
        return
      }

      axios.delete(this.apiURL + _todo._id)
        .then(res => {
          if(res.status === 200) {
            this.todos = this.todos.filter(todo => todo._id !== res.data.id)
          }
        })
        .catch(err => console.log(err))

    }
  },
  created() {
    this.fetchTodos()
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