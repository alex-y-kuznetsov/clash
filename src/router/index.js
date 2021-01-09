import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '@/pages/StartPage.vue'
import ClashPage from '@/pages/ClashPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

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
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: NotFoundPage
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  routes
})

export default router
