<template>
  <form class="form" @submit.prevent="handleSubmit">
    <input type="text" placeholder="Add todo" v-model="title">
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    const title = ref('')

    const handleSubmit = () => {
      context.emit('add-todo', title.value)
      title.value = ''
    }

    return { title, handleSubmit }
  }
}
</script>

<style scoped>
  .form {
    margin-bottom: 2rem;
    display: flex;
  }
  input {
    flex: 1;
    padding: .6rem;
    border-radius: .5rem;
    border: 1px solid #cecece;
  }
  input:focus {
    outline: 1px solid #818181;
  }
  button {
    padding: .5rem .7rem;
    background-color: #333;
    color: #fff;
    border: 0;
    border-radius: .5rem;
    margin-left: 2rem;
    cursor: pointer;
  }
</style>