<template>
  <NamesList :names="names" />
  <NamesLoop :names="names" />
  <UsersList :users="users" @deleteUser="handleDelete" />
  <ObjectsLoop :user="users[0]" />
</template>

<script>
import NamesList from './components/NamesList.vue'
import NamesLoop from './components/NamesLoop.vue'
import ObjectsLoop from './components/ObjectsLoop.vue'
import UsersList from './components/UsersList.vue'
export default {
  components: { NamesList, NamesLoop, UsersList, ObjectsLoop },
  data() {
    return {
      names: ['Joakim', 'Hans', 'Jeanette', 'Tommy', 'Haitem', 'Jack', 'Joakim'],
      users: [
        { id: 1, name: 'Joakim', age: 35 },
        { id: 2, name: 'Hans', age: 38 },
        { id: 3, name: 'Jeanette', age: 34 },
      ]
    }
  },
  methods: {
    handleDelete(id) {
      this.users = this.users.filter(user => user.id !== id)
    }
  }
}
</script>

<style>

</style>
