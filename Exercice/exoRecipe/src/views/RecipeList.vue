<script setup>
import RecipeCard from '@/components/RecipeCard.vue';
import { useRecipeStore } from '@/stores/Recipe';
import { ref } from 'vue';



const recipeStore = useRecipeStore();

const filter = ref(undefined);

const selectFilter = ()=>{
    recipeStore.setFilter(filter.value)
    console.log(recipeStore.getRecipeFiltered)
}

</script>

<template>
<div class="filter">
    <select v-model="filter" >
        <option :value="'all'">All</option>
        <option v-for="ingredientList in recipeStore.ingredientList" :value="ingredientList.id">{{ ingredientList.name }}</option>
    </select>
    <button @click="selectFilter">select</button>
</div>

<div class="container">
    <RecipeCard v-for="recipe in recipeStore.getRecipeFiltered" :key="recipe.id" :recipe="recipe"/>
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>