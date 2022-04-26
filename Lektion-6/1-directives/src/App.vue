<template>
  <div>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
import axios from 'axios'
import PostsList from './components/PostsList.vue'
export default {
  components: {PostsList},
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    }
  },
  created() {
    this.getPosts()
  },
  //   directives: {
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