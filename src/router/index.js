import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

//import dataList from '../product/dataList.json'

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
  },
 
  {
    path: '/order',
    name: 'CurrentOrder',   
    component: () => import(/* webpackChunkName: "about" */ '../views/CurrentOrder.vue'),
    props: { newsletterPopup: false }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(to => {  
  console.log(to)
  store.state.isLoadDataOK = false
  //store.commit('getAllProducts',dataList)
  
  
  
})

export default router
