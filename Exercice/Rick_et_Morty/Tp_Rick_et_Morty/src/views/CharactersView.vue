<script setup>
import { useStoreCharacters } from '@/stores/charactersStrore';
import { onMounted } from 'vue';


const charactersStore = useStoreCharacters()

onMounted(async ()=>{
    let url = charactersStore.buildUrl()
    charactersStore.getCharacters(url)
})
</script>

<template>

</template>

<style scoped>

</style>