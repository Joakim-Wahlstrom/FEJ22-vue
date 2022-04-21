<template>
  <div class="bg-white d-flex justify-content-between align-items-center p-2 mb-2 rounded shadow">
    <p class="m-0 h4" :class="{ done: todo.completed }" >{{ todo.title }}</p>
    <button class="btn btn-danger btn-sm">X</button>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
  p {
    cursor: pointer;
    user-select: none;
    flex: 1;
    /* background-color: red; */
  }
  .done {
    text-decoration: line-through;
    color: #cecece;
  }
</style>