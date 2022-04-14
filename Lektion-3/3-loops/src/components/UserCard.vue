<template>
  <div class="card" @click="handleClick">
    <h3>{{ user.name }}</h3>
    <p>{{user.age}}</p>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    handleClick() {
      console.log(this.user)
      this.$emit('deleteUser', this.user.id)
    }
  }
}
</script>

<style>

</style>