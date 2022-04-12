<template>
  <div>
    <input type="text" id="input" v-model="text">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'laasdddddd'
    }
  },
  // mounted() {
    // document.querySelector('#input').value = this.text
    // document.querySelector('#input').addEventListener('keyup', () => {
    //   this.text = document.querySelector('#input').value
    // })
  // }
}
</script>

<style>

</style>