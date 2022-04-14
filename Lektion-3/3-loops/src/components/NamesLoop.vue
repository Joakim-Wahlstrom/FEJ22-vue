<template>
  <p v-for="(name, index) in names" :key="index" >{{ index }} : {{ name }}</p>
</template>

<script>
export default {
  props: ['names']
}
</script>

<style>

</style>