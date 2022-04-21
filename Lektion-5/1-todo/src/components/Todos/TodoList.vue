<template>
  <div class="py-3">
    <TransitionGroup name="fade-slide">
      <div v-for="todo in todos" :key="todo._id">
        <TodoListItem v-if="value === ''" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
        <TodoListItem v-else-if="todo.completed === value" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" />
      </div>

      <!-- <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-complete="$emit('toggle-complete', todo)" @delete-todo="$emit('delete-todo', todo)" /> -->
    </TransitionGroup>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  props: ['todos', 'value'],
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