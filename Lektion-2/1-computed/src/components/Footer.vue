<template>
  <footer>
    <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
  name: 'appFooter',
  props: ['msg']
}
</script>

<style scoped>
  footer {
    background-color: darkcyan;
    padding: 3rem;
  }
</style>