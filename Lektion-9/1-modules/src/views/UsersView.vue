<template>
  <div class="container mt-5">
    <AddUserForm />
    <h2 v-if="loading" class="text-danger">LOADING...</h2>
    <UserList :users="users" />
  </div>
</template>

<script>
import AddUserForm from '../components/users/AddUserForm.vue'
import UserList from '../components/users/UserList.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { 
    AddUserForm,
    UserList
  },
  computed: {
    ...mapGetters(['users', 'loading', 'error'])
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  created() {
    this.getUsers()
  }
}
</script>

<style>

</style>