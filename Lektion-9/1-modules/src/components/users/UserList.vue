<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <UserRow v-for="(user, index) in users" :key="user.id" :user="user" :index="index" />
  </tbody>
</table>
</template>

<script>
import UserRow from './UserRow.vue'
export default {
  props: ['users'],
  components: { UserRow }
}
</script>

<style>

</style>