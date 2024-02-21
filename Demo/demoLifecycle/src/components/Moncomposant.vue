<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import axios from 'axios';


const cpt = ref(0);
let interval = null;
let listPokemon = []

onBeforeMount(async ()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10")

    response.data.results.forEach(pokemon => {
        listPokemon.push(pokemon.name);
    });
})

onMounted(()=>{
    interval = setInterval(()=>{
        cpt.value +=1;
        console.log(cpt.value)
    },1000)
})

onUnmounted(()=>{
    if(interval) clearInterval(interval)
})
</script>

<template>

<div> Mon composant !</div>
<div>{{ cpt }}</div>

<div v-for="pokemon in listPokemon">
{{ pokemon }}
</div>

</template>

<style scoped>

</style>