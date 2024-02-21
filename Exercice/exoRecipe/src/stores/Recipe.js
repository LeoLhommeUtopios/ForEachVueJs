import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipeStore',()=>{
    const recipeList = ref([])
    const ingredientList = ref([
        {id:1, name:"Tomato" },
        {id:2, name:"Meat" },
        {id:3, name:"flour"},
        {id:4, name:"Salt" },
        {id:5, name:"Cabbage" },
        {id:6, name:"Rice" },
        {id:7, name:"Water" }
    ]);

    const filter = ref('all')

    const recipeFilteredByIng = computed(() => recipeList.value.filter(r => r.ingredientList.includes(filter.value)))
    // const recipeEasy = computed(()=> recipeList.value.filter(r => r.name.includes(filter.value)))
  

    const getRecipeFiltered = computed(() => {
        if(filter.value === 'all'){
            return recipeList.value
        }
        return recipeFilteredByIng.value
        
    });

    function setFilter (value){
        filter.value = value
    }

    function getIngredientName (id){
        let ingredientFound = ingredientList.value.find(i => i.id === id);
        return ingredientFound.name
    }

    function addRecipe (newRecipe){
        recipeList.value.push(newRecipe);
    }

    function getRecipe (id){
        return recipeList.value.find(r => r.id === id);
    }

    function removeRecipe (id){
        let recipeFound = getRecipe(id);
        if(recipeFound !== null){
            let index = recipeList.value.indexOf(recipeFound);
            recipeList.value.splice(index,1);
        }
    }

    function editRecipe (id, recipeEdit){
        let recipeFound = getRecipe(id);
        if(recipeFound !== null){
            let index = recipeList.value.indexOf(recipeFound);
            recipeList.value.splice(index,1,recipeEdit);
        }
    }

    return {recipeList,ingredientList,getRecipeFiltered,setFilter,getIngredientName ,addRecipe,removeRecipe,getRecipe,editRecipe}
})