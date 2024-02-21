import { createRouter, createWebHistory } from 'vue-router'
import FormRecipe from "../views/FormRecipe.vue"
import recipeList from "../views/RecipeList.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: recipeList
    },
    {
      path:"/add",
      component:FormRecipe
    },
    {
      path:"/edit/:id",
      component:FormRecipe
    }

  ]
})

export default router
