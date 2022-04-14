<template>
  <div class="user">
    <h3>{{ user.name }}</h3>
    <p>Age: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
    <button>Change</button>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
  .user {
    margin-block: 2rem;
    background-color: cadetblue;
    padding: 1rem;
  }
</style>