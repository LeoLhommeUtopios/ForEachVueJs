import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import registerView from '../views/RegisterView.vue'
import CharactersView from '../views/CharactersView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component:LoginView
    },
    {
      path:'/register',
      component:registerView
    },
    {
      path:'/characters',
      component:CharactersView
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const authStore = useAuthStore();

  authStore.checkLoginStatus()

  if(to.path === '/login' || to.path === '/register'){
    if(authStore.isLogged){
      next('/')
    }else{
      next();
    }
  }else{
    if(!authStore.isLogged){
      next('/login')
    }else{
      next()
    }
  }
})

export default router
