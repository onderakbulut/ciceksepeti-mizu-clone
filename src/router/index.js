import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import AllProducts from '../views/AllProducts.vue'
import ProductSingle from '../views/productsingle.vue'
import LogoutView from '../views/LogoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/RegisterPage.vue')
    },
    {
      path: '/:category',
      name: 'list',
      component: ListView
    },
    {
      path: '/allproducts/:page?',
      name: 'allproducts',
      component: AllProducts
    },
    {
      path: '/product-single/:id',
      name: 'productsingle',
      component: ProductSingle
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    }
  ],
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
