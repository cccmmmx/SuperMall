import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Sort = () => import('../views/sort/Sort')
const Shop = () => import('../views/shop/Shop')
const ProFile = () => import('../views/profile/ProFile')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/sort',
    component:Sort
  },
  {
    path: '/shop',
    component:Shop
  },
  {
    path: '/profile',
    component:ProFile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
