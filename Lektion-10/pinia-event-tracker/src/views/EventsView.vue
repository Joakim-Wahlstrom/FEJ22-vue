<template>
  <EventCard v-for="evt in upcomingEvents" :key="evt.id" :evt="evt" />
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { useEventsStore } from '@/stores/events'
import { storeToRefs } from 'pinia'
export default {
  components: { EventCard },
  setup() {
    const eventsStore = useEventsStore()
    eventsStore.getEvents()

    const { upcomingEvents } = storeToRefs(eventsStore)

    return { upcomingEvents }
  }
}
</script>

<style>

</style>