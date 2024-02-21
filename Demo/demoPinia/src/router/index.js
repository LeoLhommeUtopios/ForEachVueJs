import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormBook from '../views/FormBook.vue'
import FormAuth from '../views/FormAuth.vue'
import AsyncView from '../views/AsyncView.vue'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path:"/addbook",
      component:FormBook
    },
    {
      path:"/login",
      component:FormAuth
    },{
      path:"/async",
      component:AsyncView
    }
  ]
});

router.beforeEach((to,from)=>{
  const authStore = useAuthStore()
  if(authStore.isLoggedIn){
    return true
  }else if (to.fullPath.startsWith("/addbook")) return '/'
  return true
})

export default router
