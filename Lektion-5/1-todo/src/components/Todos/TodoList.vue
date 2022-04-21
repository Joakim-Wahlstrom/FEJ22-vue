<template>
  <div class="py-3">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  props: ['todos'],
  components: { TodoListItem },
}
</script>

<style>

</style>