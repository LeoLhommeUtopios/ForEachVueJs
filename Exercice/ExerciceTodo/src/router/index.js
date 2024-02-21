import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import FormTodo from '../views/FormTodo.vue'
import TodoDetail from '../views/TodoDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TodoList
    },
    {
      path:"/add",
      component: FormTodo
    },
    {
      path:"/detail/:id",
      component:TodoDetail
    }
  ]
})

export default router
