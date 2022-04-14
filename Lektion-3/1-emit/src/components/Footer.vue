<template>
  <footer>
    <h3>copyright {{ title }}</h3>
  </footer>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
  footer {
    background-color: rgb(101, 34, 135);
    color: #fff;
    padding: 2rem;
  }
</style>