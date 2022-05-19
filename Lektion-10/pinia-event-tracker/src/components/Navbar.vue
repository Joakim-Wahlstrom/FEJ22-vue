<template>
  <nav class="navbar">
    <div class="container d-flex justify-between">
      <router-link to="/" class="title">My events</router-link>

      <div class="d-flex justify-between">
        <button class="btn btn-clear">Add New Event</button>
        <div @click="showDropdown = true" class="avatar-container ml-1">
          <img src="Jag.png" alt="avatar" class="avatar">
        </div>
        <div v-if="showDropdown" @click="showDropdown = false" class="dropdown-bg"></div>
        <DropDown v-if="showDropdown" @close-dropdown="showDropdown = false" />
      </div>

    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import DropDown from './DropDown.vue'
export default {
  components: { DropDown },
  name: 'PrimaryNavigation',
  setup(){
    const showDropdown = ref(false)

    return { showDropdown }
  }
}
</script>

<style>
  .navbar {
    margin-block: 1rem;
  }
  .navbar .title {
    font-size: 3rem;
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  .navbar .avatar-container {
    width: 35px;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
  .navbar .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>