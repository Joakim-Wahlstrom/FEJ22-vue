<template>
  <div v-if="showModal" class="modal-bg" @click.self="$emit('close-modal')">
    <div class="card shadow error-modal">
      <div class="card-header">
        <h4>Ooops!</h4>
      </div>
      <div class="card-body">
        <p>You need to complete the todo first</p>
        <button class="btn btn-dark" @click="$emit('close-modal')" >OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal']
}
</script>

<style>
  .modal-bg {
    background-color: #00000038;
    position: absolute;
    inset: 0;
    /* display: grid;
    place-items: center; */
    z-index: 10;
  }
  .error-modal {
    max-width: 400px;
    margin: 7rem auto;
  }
</style>