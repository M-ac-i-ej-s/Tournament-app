import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  { 
    name: 'Login',
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.getItem('user')) next({ name: 'Login' })
    else next()
})

export default router