<script setup>
import { useRecipeStore } from "@/stores/Recipe";
import { ref } from "vue";
import { uuid } from 'vue-uuid';
import { useRouter, useRoute } from 'vue-router';


const recipeStore = useRecipeStore()
const router = useRouter();
const route = useRoute();

const newRecipe = ref({
    name:"",
    cookTime:0,
    difficulty:0,
    ingredientList:[],
    id: uuid.v1()
})

const {id} = route.params

if(id !== undefined){
    let recipe = recipeStore.getRecipe(id);
    newRecipe.value = recipe
}

const handleSubmit = ()=>{
    if(id !== undefined){
        recipeStore.editRecipe(id,{
            name:newRecipe.value.name,
            cookTime:newRecipe.value.cookTime,
            difficulty:newRecipe.value.difficulty,
            ingredientList:newRecipe.value.ingredientList,
            id:newRecipe.value.id
        })

    }else{
        recipeStore.addRecipe({
            name:newRecipe.value.name,
            cookTime:newRecipe.value.cookTime,
            difficulty:newRecipe.value.difficulty,
            ingredientList:newRecipe.value.ingredientList,
            id:newRecipe.value.id
        })
    }

router.push("/")
}
</script>

<template>
<form @submit.prevent="handleSubmit">
    <input v-model.trim="newRecipe.name" type="text" placeholder="Name">
    <input v-model.trim="newRecipe.cookTime" type="number" min="0" placeholder="CookTime">
    <input v-model.trim="newRecipe.difficulty" type="number" min="0" max="10" placeholder="Difficulty">
    <select v-model="newRecipe.ingredientList" multiple>
        <option v-for="ingredientList in recipeStore.ingredientList" :value="ingredientList.id">{{ ingredientList.name }}</option>
    </select>
    <button>add</button>
</form>
</template>

<style scoped>

</style>