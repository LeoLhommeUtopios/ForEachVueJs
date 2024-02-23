<script setup>
import { useStoreCharacters } from '@/stores/charactersStrore';
import { onMounted } from 'vue';
import CharacterItem from "../components/CharacterItem.vue"


const charactersStore = useStoreCharacters()

onMounted(async ()=>{
    let url = charactersStore.buildUrl()
    charactersStore.getCharacters(url)
})
</script>

<template>

 <div v-if="charactersStore.charactersLoading">
    Characters Loading ...
 </div>

 <div v-else-if="charactersStore.charactersCount > 0">
    <CharacterItem
      v-for="character in charactersStore.charactersItems"
      :key="character.id"
      :character="character"
    />
 </div>

 <div v-else>
    No Characters found ...
 </div>

</template>

<style scoped>

</style>