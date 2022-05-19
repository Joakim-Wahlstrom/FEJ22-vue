<template>
  <router-link :to="`/event/${evt.id}`" class="card evt d-flex justify-between">
    <p class="evt-title">{{ evt.title }}</p>
    <p>{{timeFromNow}}</p>
  </router-link>
</template>

<script>
import moment from 'moment'
import 'moment/locale/sv'
import { computed } from 'vue'
export default {
  props: ['evt'],
  setup(props) {

    const timeFromNow = computed(() => {
      return moment(props.evt.timestamp).fromNow()
    })

    return { timeFromNow }
  }
}
</script>

<style>
  .card {
    border: 1px solid #c2c2c2;
    padding: 1rem;
    border-radius: .5rem;
    margin-bottom: .5rem;
    box-shadow: 3px 3px 5px #33333338;
    color: #333;
    text-decoration: none;
  }
  .evt:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .evt-title {
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>