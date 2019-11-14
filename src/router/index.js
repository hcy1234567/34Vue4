import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";
import Login from "../views/Login";
import Register from "../views/Register";
import Cart from '../views/Cart.vue';
import Details from '../views/Details.vue';
import ProductList from "../views/ProductList";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },{
     path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/productList',
    name: 'productList',
    component: ProductList
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/details',
    name:'details',
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
