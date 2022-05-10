<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <h2 class="title">Create a new post</h2>

      <div class="form-group">
        <label for="title" class="form-label">Title: </label>
        <input type="text" id="title" class="form-control" v-model="blog.title">
        <p class="error" v-if="titleError">Please enter a title</p>
      </div>

      <div class="form-group">
        <label for="imgUrl" class="form-label">image URL: </label>
        <input type="text" id="imgUrl" class="form-control" v-model="blog.imgURL">
        <p class="error" v-if="imgError">Please enter an image url</p>
      </div>

      <div class="form-group">
        <label for="content" class="form-label">Content: </label>
        <textarea id="content" class="form-control" v-model="blog.body"></textarea>
        <p class="error" v-if="bodyError">Please enter some content</p>
      </div>

      <p class="form-label">Categories: </p>
      <div class="form-group">

        <div v-for="(cat, index) in blog.categories" :key="index" class="input-group">
          <input type="text" class="form-control" v-model="blog.categories[index]">
          <button type="button" @click="removeCategory(index)" class="btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        <p class="error" v-if="catError">Please enter atleast one category</p>

        <button type="button" @click="addCategory" class="btn btn-success"><i class="fa-solid fa-plus"></i> Add a category</button>

      </div>

      <div class="form-group">
        <label for="author">Author: </label>
        <select class="form-control" v-model="blog.author">
          <option value="" selected disabled></option>
          <option v-for="author in authors" :key="author"  :value="author">{{ author }}</option>
        </select>
        <p class="error" v-if="authorError">Please choose an author</p>
      </div>

      <button class="btn btn-primary">Create post</button>

    </form>  
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blog: {
        title: '',
        body: '',
        imgURL: '',
        categories: [''],
        author: ''
      },
      authors: ['Joakim', 'Hans', 'Jeanette', 'Tommy'],
      titleError: false,
      bodyError: false,
      imgError: false,
      catError: false,
      authorError: false
    }
  },
  methods: {
    addCategory() {
      this.blog.categories.push('')
    },
    removeCategory(i) {
      this.blog.categories.splice(i, 1)
    },
    async handleSubmit() {
      this.titleError = !this.blog.title ? true : false
      this.bodyError = !this.blog.body ? true : false
      this.imgError = !this.blog.imgURL ? true : false
      this.authorError = !this.blog.author ? true : false
      if(!this.blog.categories.length || !this.blog.categories[0]) {
        this.catError = true
      } else {
        this.catError = false
      }


      if(!this.titleError && !this.bodyError && !this.imgError && !this.authorError && !this.catError) {

        const res = await axios.post('http://localhost:3000/posts', this.blog)
        if(res.status === 201) {
          this.$router.push({ name: 'home' })
        }

      }

    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 1.8rem;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .form-label {
    display: block;
    margin-bottom: .5rem;
  }
  .form-control {
    width: 100%;
    display: block;
  }
  .error {
    font-size: .9rem;
    color: red;
    margin-block: .4rem;
  }
  textarea {
    resize: none;
    height: 200px;
  }

  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .fa-trash {
    color: red;
    font-size: 1.2rem;
  }
</style>