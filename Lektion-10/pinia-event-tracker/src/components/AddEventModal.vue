<template>
  <div class="modal-bg" @click.self="$emit('close-modal')">
    <div class="modal">
      <button class="btn big-btn r-corner" @click="$emit('close-modal')">X</button>
      <h2 class="modal_title">Add Event</h2>

      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="title">Title:</label>
          <input type="text" class="form-control" id="title" v-model="formData.title" >
        </div>
        <div class="input-group">
          <label for="date">Date:</label>
          <input type="datetime-local" class="form-control" id="date" v-model="formData.timestamp" >
        </div>
        <div class="input-group">
          <label for="desc">Event Description:</label>
          <textarea class="form-control" name="desc" id="desc" cols="30" rows="10" v-model="formData.body"></textarea>
        </div>
        <div class="d-flex">
          <button class="btn btn-outline ml-auto">Add Event</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { useEventsStore } from '@/stores/events'
export default {
  setup(props, { emit }) {
    const evtStore = useEventsStore()

    const formData = ref({
      title: '',
      body: '',
      timestamp: ''
    })

    const handleSubmit = async () => {
      let msek = Date.parse(formData.value.timestamp)

      const newEvent = {
        ...formData.value,
        timestamp: msek,
        userId: 1
      }

      const res = await axios.post('http://localhost:3000/events', newEvent)
      if(res.status === 201) {
        evtStore.list.push(res.data)
        emit('close-modal')
      }
    }

    return { formData, handleSubmit }
  }
}
</script>

<style>
  .modal-bg {
    position: fixed;
    inset: 0;
    background-color: #0000000e;
  }
  .modal {
    position: relative;
    top: 10vh;
    background-color: #fff;
    padding: 2rem;
    width: 80%;
    margin: 0 auto;
    max-width: 900px;
    border: 1px solid #c2c2c2;
    border-radius: 1rem;
    box-shadow: 3px 3px 5px #33333338;
  }
  .r-corner {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .big-btn {
    font-size: 1.2rem;
    padding: 0;
    font-weight: bold;
  }
  .modal_title {
    text-align: center;
    font-size: 2rem;
    border-bottom: 1px solid #c2c2c2;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .input-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  .input-group label {
    display: inline-block;
    width: 100%;
  }
  .form-control {
    width: 100%;
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid #c2c2c2;
    resize: none;
  }
  .form-control:focus {
    outline: 1px solid #8d8d8d;
  }
</style>