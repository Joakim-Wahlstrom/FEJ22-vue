<template>
  <tr :class="{inactive: !user.active}">
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ user.name }}</td>
    <td>{{ user.active ? 'Active' : 'Inactive' }}</td>
    <td class="text-end">
      <button @click="toggleActive(user)" class="btn btn-sm btn-info me-2 btn-fixed-width">{{ user.active ? 'Inactivate' : 'Activate' }}</button>
      <button class="btn btn-sm btn-danger btn-fixed-width"><i class="fa-solid fa-trash"></i> Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['user', 'index'],
  methods: {
    ...mapActions(['toggleActive'])
  }
}
</script>

<style>
.btn-fixed-width {
  width: 100px;
}
  .inactive {
    color: #dcdcdc;
  }
</style>