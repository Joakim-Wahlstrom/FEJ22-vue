<template>
  <div v-if="post" class="post">
    <h2 class="title">{{ post.title }}</h2>
    <div class="img-container">
      <img :src="post.imgURL" alt="">
    </div>
    <div class="content_info">
      <ul class="content_list">
        <li v-for="(cat, index) in post.categories" :key="index">{{ cat }}</li>
      </ul>
      <p>Author: {{ post.author }}</p>
    </div>
    <p class="post-body">{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      post: null
    }
  },
  methods: {
    async getPost() {
      const res = await axios.get(`http://localhost:3000/posts/${this.id}`)
      if(res.status === 200) {
        this.post = res.data
      }
    }
  },
  created() {
    this.getPost()
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .img-container {
    width: 100%;
    height: 50vh;
    margin-bottom: .5rem;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>