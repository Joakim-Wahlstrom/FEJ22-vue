<template>
  <form class="row mb-5" @submit.prevent="handleSubmit">
    <div class="col-8">
      <input type="text" class="form-control" placeholder="User name" v-model="userName">
    </div>
    <div class="col-4 text-end">
      <button class="btn btn-dark">Add User</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    ...mapActions(['addUser']),
    handleSubmit() {
      this.addUser(this.userName)
      this.userName = ''
    }
  }
}
</script>

<style>

</style>