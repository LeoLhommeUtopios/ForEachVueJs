<script setup>
import { ref } from 'vue';


const imgloaded = ref(false)

const props = defineProps({
    character:{
        type: Object,
        required: true
    }
})

console.log(character.name)
</script>

<template>

    <div>
        <img :class="{hidden: imgloaded}" src="@/images/avatar_placeholder.jpeg" alt="avatar">
        <img :class="{hidden: !imgloaded}" :src="character.image" alt="avatar" @load="imgloaded = true" >
        <h2>{{ character.name }}</h2>
        <div>
            <span>Species:</span>
            <span>{{ character.species }}</span>
        </div>
    </div>

</template>

<style scoped>

.hidden{
    visibility: hidden;
}
</style>