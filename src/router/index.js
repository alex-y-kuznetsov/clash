import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '@/pages/StartPage.vue'
import ClashPage from '@/pages/ClashPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/clash',
    name: 'ClashPage',
    component: ClashPage
  }
]

const router = new VueRouter({
  routes
})

export default router
