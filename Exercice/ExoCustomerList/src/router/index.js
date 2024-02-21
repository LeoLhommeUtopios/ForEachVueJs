import { createRouter, createWebHistory } from 'vue-router'
import Customer from '../views/Customer.vue'
import CustomerDetail from '../views/CustomerDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Customer
    },
    {
      path:"/customer/:id",
      component: CustomerDetail
    }
  ]
})

export default router
