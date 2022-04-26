<template>
  <div class="card mb-3 p-4">
    <h2 v-color>{{ post.title.toUpperCase() }}</h2>
    <p>{{ post.body.slice(0, 70) }}...</p>
  </div>
</template>

<script>
export default {
  props: ['post'],
  // directives: {
  //   color: {
  //     mounted: (el) => {
  //       el.style.color = '#' + Math.random().toString().slice(2, 8)
  //     }
  //   }
  // }
}
</script>

<style>

</style>