import { createRouter, createWebHashHistory } from 'vue-router'
import Forum from '../views/Forum.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/connexion',
    name: 'Login',
    component: Login
  },
  {
    path: '/inscription',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/mon-compte',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
