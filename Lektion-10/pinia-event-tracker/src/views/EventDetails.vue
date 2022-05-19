<template>
  <div v-if="event" class="card form-card">
    <h2>{{ event.title }}</h2>
    <p>{{ event.body }}</p>
  </div>
</template>

<script>
import { useEventsStore } from '@/stores/events'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const { id } = useRoute().params

    const eventStore = useEventsStore()
    const event = eventStore.event(id)

    return { event }
  }
}
</script>

<style>

</style>