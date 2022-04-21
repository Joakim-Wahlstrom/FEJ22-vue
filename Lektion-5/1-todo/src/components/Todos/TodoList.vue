<template>
  <div class="py-3">
    <TransitionGroup name="fade-slide">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
    </TransitionGroup>
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

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 500ms ease-out;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }
  /* .fade-slide-enter-to {} */
  /* .fade-slide-leave-from {} */
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
  
</style>