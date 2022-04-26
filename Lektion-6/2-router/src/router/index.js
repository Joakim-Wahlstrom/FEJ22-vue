import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import DetailsView from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailsView,
    props: true
  },
  {
    path: '/:pathMatch(.*)',
    name: 'noFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
