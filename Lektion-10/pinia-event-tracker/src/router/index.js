import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import WelcomeView from '../views/WelcomeView.vue'

const requireAuth = (to, from, next) => {
  
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
    component: EventsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
