import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import EventDetails from '../views/EventDetails.vue'
import WelcomeView from '../views/WelcomeView.vue'
import { useAuthStore } from '@/stores/auth'

const requireAuth = (to, from, next) => {
  const authStore = useAuthStore()
  if(!authStore.token) next("/")
  else next()
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
    beforeEnter: requireAuth
  },
  {
    path: '/event/:id',
    name: 'eventDetails',
    component: EventDetails,
    beforeEnter: requireAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
