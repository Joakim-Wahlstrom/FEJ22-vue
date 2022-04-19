<template>
  <teleport to="#modals">
    <div class="modal-wrapper" @click.self="$emit('close')">
      <div class="modal">
        <slot>
          <h2>Cookies</h2>
          <p>vi sparar all din data och säljer till högstbjudande..</p>
          <button @click="$emit('close')">Close</button>
        </slot>
        <hr>
        <slot name="links">
          <!-- <a href="#">My website</a>
          <a href="#">Google</a> -->
        </slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'ModalComponent'
}
</script>

<style>
  .modal-wrapper {
    background-color: #00000053;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #fff;
    padding: 3rem;
    border-radius: 1em;
    box-shadow: 5px 10px 1rem #11111130, 5px 10px 5rem #33333316 ;
  }
  .input-group {
    margin-bottom: 2rem;

  }
  .form-control {
    width: 100%;
    border-radius: .5em;
    border: 1px solid #333;
    padding: .4em .6em;
  }
  .modal a {
    text-decoration: none;
    margin: 1rem;
  }
</style>