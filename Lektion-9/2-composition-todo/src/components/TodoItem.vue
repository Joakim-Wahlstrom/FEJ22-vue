<template>
  <div class="todo">
    <p :class="{completed: todo.completed}" class="title" @click="toggleComplete" >{{ todo.title }}</p>
    <button @click="removeTodo">X</button>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  setup(props, { emit }) {

    const removeTodo = () => {
      emit('remove-todo', props.todo.id)
    }

    const toggleComplete = () => {
      emit('toggle-complete', props.todo)
    }

    return { removeTodo, toggleComplete }
  }
}
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px #00000055;
    padding: 0 .7rem;
    border-radius: .5rem;
    margin-bottom: 1rem;
  }
  .title {
    padding: .7rem 0;
    cursor: pointer;
    flex: 1;
  }
  button {
    width: 25px;
    aspect-ratio: 1;
    background-color: red;
    border: 0;
    color: #fff;
    border-radius: .3rem;
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
    color: #cecece;
  }
</style>