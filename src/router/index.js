import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import Mem from '@/components/tabbar/Mem'
import Search from '@/components/tabbar/Search'
import Shop from '@/components/tabbar/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mem',
      name: 'Mem',
      component: Mem
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ],
  linkActiveClass:"mui-active"
})
