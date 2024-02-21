<script setup>
import { useAsyncStore } from '@/stores/async';


const asyncStore = useAsyncStore()

async function load (){
await asyncStore.fetchAsyncData('33000');
console.log(asyncStore.data[0]["post code"])
}

</script>

<template>
    <button @click="load">load</button>
    <div v-if="asyncStore.data.length > 0">
        {{ asyncStore.data[0]["post code"]}}
        {{ asyncStore.data[0]["country"]}}

    </div>

</template>

<style scoped>

</style>