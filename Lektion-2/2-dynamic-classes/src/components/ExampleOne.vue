<template>
  <div>
    <h2 :class="{ green: true, red: true }">EN TEXT</h2>
    
    <div @click="available = !available" :class="{activeClass: available}">
      <span>Joakim</span>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      available: false
    }
  },
  methods: {
    toggleAvailable() {
      this.available = !this.available
    }
  }
}
</script>

<style scoped>
  span {
    background: red;
    margin-top: 1rem;
    display: inline-block;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
  }
  .activeClass span {
    background: green;
  }
</style>