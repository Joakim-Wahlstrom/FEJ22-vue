<template>
  <div class="todos">
    <div v-if="todos.length">
      <p>{{todos[0].title}}</p>
      <p>{{todos[1].title}}</p>
    </div>
    <h2 v-else>Det finns inga todos kvar</h2>
  </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>
  .todos {
    margin-top: 2rem;
  }
</style>