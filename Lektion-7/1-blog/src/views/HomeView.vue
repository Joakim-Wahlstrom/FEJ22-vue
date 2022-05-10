<template>
  <BlogPost v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import axios from 'axios'
import BlogPost from '../components/BlogPost.vue'
export default {
  components: { BlogPost },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get('http://localhost:3000/posts')
      this.posts = res.data
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>