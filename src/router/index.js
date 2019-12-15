import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: ProductDetail,
    children: [
      {
        path: 'edit',
        component: EditProduct
      }
    ]
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
