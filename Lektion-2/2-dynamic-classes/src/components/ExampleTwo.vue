<template>
  <div>
    <button @click="toggle" class="btn btn-active">Toggle</button>
    <div class="output" :class="computedClasses">
      <h2>EN TEXT</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: false,
      text: false
    }
  },
  methods: {
    toggle() {
      this.bg = !this.bg
      this.text = !this.text
    }
  },
  computed: {
    computedClasses() {
      return {
        'bg-dark': this.bg,
        'text-white': this.text
      }
    }
  }
}
</script>

<style scoped>
  .btn {
    padding: 1rem 2rem;
    cursor: pointer;
    border: 0;
    border-radius: 1rem;
    background-color: transparent;
    text-transform: uppercase;
  }
  .btn-active {
    background-color: green;
    color: #fff;
  }
  .output {
    margin-top: 1rem;
    background-color: #e8e8e8;
    width: 300px;
    aspect-ratio: 1;
    padding: 2rem;
  }
  .bg-dark {
    background-color: #333;
  }
  .text-white {
    color: #fff;
  }

</style>