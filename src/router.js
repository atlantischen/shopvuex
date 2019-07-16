import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Classify from './views/list/classify'
import Products from './views/list/products'
import product_lists from './views/list/product_lists'
import User from './views/user/user'
import Login from './views/user/login'
import Register from './views/user/register'
import Recommend from './views/list/Recommend'
import Shop_car from './views/shop_car/shop_car'
import Address from './views/Address/Address'
import AddressNew from './views/Address/AddressNew'
import Addressage from './views/Address/Addressage'
import Car_count from './views/shop_car/Car_count'
import Car_list from './views/shop_car/Car_list'





Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/products/:id',
      name: 'products',
      component: Products
    },
    {
      path: '/product_lists/:id',
      name: 'product_lists',
      component: product_lists
    },

    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/shop_car',
      name: 'shop_car',
      component: Shop_car
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/AddressNew',
      name: 'AddressNew',
      component: AddressNew
    },
    {
      path: '/Addressage',
      name: 'Addressage',
      component: Addressage
    },
    {
      path: '/Car_count',
      name: 'Car_count',
      component: Car_count
    },
    {
      path: '/Car_list',
      name: 'Car_list',
      component: Car_list
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
