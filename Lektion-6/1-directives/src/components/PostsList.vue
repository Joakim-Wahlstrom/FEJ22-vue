<template>
  <div class="container mt-5">
    <input v-focus type="search" placeholder="Search..." v-model="search" class="form-control mb-5">

    <div v-if="posts.length">
      <PostCard v-for="post in filteredPosts" :key="post.id" :post="post" />
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
  data() {
    return {
      search: ''
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.search))
    }
  },
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