import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "loginForm" */ '../components/Login.vue')

  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/Browse',
    name: 'Browse',
    component: () => import('../components/Browse.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
