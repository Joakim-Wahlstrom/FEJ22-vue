<template>
  <div class="container mt-5">
    <input v-focus type="search" placeholder="Search..." class="form-control mb-5">

    <div v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <h1>No posts</h1>
    </div>

  </div>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
  components: { PostCard },
  props: ['posts'],
  directives: {
    focus: {
      mounted: el => {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>