import { createRouter, createWebHistory } from 'vue-router'
import user from '../views/user.vue'
import orders from '../views/orders.vue'
import products from '../views/products.vue'
import category1 from '../views/category1.vue'
import category2 from '../views/category2.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: user,
    },
    {
      path: '/orders',
<<<<<<< HEAD
=======

>>>>>>> e183441b4254db8680e5b1f26cf6ac0f7055a9ae
      component: orders,
    },
    {
      path: '/products',
      component: products,
    },
  ],
})

export default router
