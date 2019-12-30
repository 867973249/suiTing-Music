import Vue from 'vue'
import VueRouter from 'vue-router'
// import IndexMain from '../views/IndexMain.vue'
import ChatRoom from '../views/ChatRoom.vue'
import PlayPage from '../views/PlayPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat',
    name: 'chat',
    component: ChatRoom
  },
  {
      path: '/',
      name: 'home',
      component: PlayPage
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
