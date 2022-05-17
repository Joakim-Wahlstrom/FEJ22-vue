import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UsersView from '../views/UsersView.vue'
import store from '../store/index'

const requireAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn

  if(!loggedIn) next({ name: 'login' })
  else next()
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
