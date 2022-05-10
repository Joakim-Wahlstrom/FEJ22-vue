<template>
  <div class="create">
    <form>
      <h2 class="title">Create a new post</h2>

      <div class="form-group">
        <label for="title" class="form-label">Title: </label>
        <input type="text" id="title" class="form-control">
        <p class="error">Please enter a title</p>
      </div>

      <div class="form-group">
        <label for="imgUrl" class="form-label">image URL: </label>
        <input type="text" id="imgUrl" class="form-control">
        <p class="error">Please enter an image url</p>
      </div>

      <div class="form-group">
        <label for="content" class="form-label">image URL: </label>
        <textarea id="content" class="form-control"></textarea>
        <p class="error">Please enter some content</p>
      </div>

      <p class="form-label">Categories: </p>
      <div class="form-group">

        <div class="input-group">
          <input type="text" class="form-control">
          <button class="btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        <p class="error">Please enter atleast one category</p>
        <button class="btn btn-success"><i class="fa-solid fa-plus"></i> Add a category</button>

      </div>

      <div class="form-group">
        <label for="author">Author: </label>
        <select class="form-control">
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
export default {
  data() {
    return {
      blog: {
        title: '',
        body: '',
        imgUrl: '',
        categories: [],
        author: ''
      },
      authors: ['Joakim', 'Hans', 'Jeanette', 'Tommy'],
      titleError: false,
      bodyError: false,
      imgError: false,
      catError: false,
      authorError: false
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

</style>