import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import products from '../product/product'
import store from '../store/index.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id?',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(to => {
  console.log(to)
  console.log(products);
  
  store.commit('getAllProducts',products)
  console.log(store.state.products)
})

export default router
