<script setup>
import { useRecipeStore } from '@/stores/Recipe';
import { useRouter } from 'vue-router';


const recipeStore = useRecipeStore()
const {recipe} = defineProps(["recipe"]);
const router = useRouter()

const editRecipe =()=>{
    router.push(`/edit/${recipe.id}`)
}

const removeRecipe =()=>{
    recipeStore.removeRecipe(recipe.id)
}
</script>

<template>

<div class="card">

    <h3>{{ recipe.name }}</h3>
    <h5>cookTime :{{ recipe.cookTime }}</h5>
    <h5>difficulty :{{ recipe.difficulty }}</h5>
    <p>Ingredient</p>
    <ul>
        <li v-for="ingredient in recipe.ingredientList" :key="ingredient.id">{{ recipeStore.getIngredientName(ingredient) }}</li>
    </ul>
    <button @click="editRecipe">Edit</button>
    <button @click="removeRecipe">Remove</button>
</div>
</template>

<style scoped>
.card{
    border: solid rgb(95, 95, 95) 1px;
    border-radius: 5px;
    margin-right: 15px;
    padding: 10px;
    box-shadow: 4px 3px 3px rgba(0, 0, 0, 0.514);
}
</style>