import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ContactDetail from '../views/ContactDetail.vue'
import NotFoundView from '../views/NotFoundView.vue'
import FirstAboutView from '../views/about/FirstAboutView.vue'
import SecondAboutView from '../views/about/SecondAboutView.vue'
import PrivateView from '../views/PrivateView.vue'
import { inject } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path:"/about",
      component: About,
      children:[
        {path: "first", component: FirstAboutView},
        {path: "second", component: SecondAboutView}
      ]
    },
    {
      path:"/contact",
      component: Contact
    },
    {
      path:"/contact/:contactId",
      component:ContactDetail
    },
    {
      path:"/:pathMatch(.*)",
      redirect: '/not-found'
    },
    {
      path:"/not-found",
      component:NotFoundView
    },
    {
      path:"/private",
      component:PrivateView
    }
  ]
})

router.beforeEach((to,from)=>{
  if(to.path.startsWith("/private")){
    const {user} = inject('user');
    if(user.value) return true;
    else return "/"
  }else return true;
});

export default router
