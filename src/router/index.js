import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HomePage/Home.vue'

Vue.use(Router)
let routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = new Router({
  routes: routes
})

router.beforeEach((to,from,next)=> {
  next()
})

export default router
