<template>
  <h1>Details</h1>
  <p>{{ $route.params.id }}</p>
  <p>{{ dataId }}</p>
  <p>{{ id }}</p>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return {
      dataId: this.$route.params.id
    }
  },
  mounted() {
    console.log(this.$route)
    // await axios.get('http://localhost:5000/api/todos/' + this.$route.params.id)
  }
}
</script>

<style>

</style>