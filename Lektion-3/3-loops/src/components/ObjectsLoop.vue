<template>
  <div class="card">
    <div v-for="(value, key, index) in user" :key="index">
      <p>{{ key }} - {{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>

</style>