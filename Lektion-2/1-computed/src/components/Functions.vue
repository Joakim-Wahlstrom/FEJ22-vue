<template>
  <div>
    <!-- <button @click="sum++">Add</button>
    <button @click="sum--">Subtract</button> -->
    <button @click="add(5)">Add</button>
    <button @click="sub">Subtract</button>


    <div>{{ sum }}</div>
  </div>
</template>

<script>
export default {
  name: 'FunctionsComponent',
  data() {
    return {
      sum: 35
    }
  },
  methods: {
    add(amount) {
      this.sum += amount
    },
    sub() {
      this.sum--
    }
  }
}
</script>

<style>

</style>