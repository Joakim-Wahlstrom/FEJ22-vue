import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'

const routes = [
  {
    path: '/',
    name: 'events',
    component: EventsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
