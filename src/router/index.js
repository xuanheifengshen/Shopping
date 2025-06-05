import { createRouter, createWebHistory } from 'vue-router'
import user from '../views/user.vue'
import orders from '../views/orders.vue'
import products from '../views/products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: user,
    },
    {
      path: '/orders',

      component: orders,
    },
    {
      path: '/products',
      component: products,
    },
  ],
})

export default router
