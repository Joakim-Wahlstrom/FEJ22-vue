<template>
  <header>
    <h1 @click="change">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    change() {
      this.title = 'Hej'
    }
  }
}
</script>

<style scoped>
  header {
    background-color: rgb(101, 34, 135);
    color: #fff;
    padding: 2rem;
  }
</style>