<template>
  <form @submit.prevent="addTodo" class="bg-white border-bottom py-5">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Add todo.." ref="titleInput" v-model="title">
            <button class="btn btn-dark">ADD</button>
          </div>
        </div>
        <div class="col-4">
          <select class="form-select" v-model="select">
            <option value="">Show all</option>
            <option value="false">Show Uncompleted</option>
            <option value="true">Show Completed</option>
          </select>
        </div>
      </div>
      <small v-if="error" class="text-danger">{{ error }}</small>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      select: '',
      error: ''
    }
  },
  methods: {
    addTodo() {
      if(this.title.trim() === '') {
        this.error = 'You need to enter what todo'
        this.$refs.titleInput.focus()
        return
      }

      this.error = ''
      this.$emit('add-todo', this.title)
      this.title = ''
      this.$refs.titleInput.focus()

    }
  }
}
</script>

<style>

</style>