<script setup>
import { ref } from 'vue';
import Moncomposant from './components/Moncomposant.vue';


const isShown = ref(false)
</script>

<template>
 <button @click="isShown= !isShown">{{ isShown? 'affiché':'caché' }}</button>
 <Moncomposant v-if="isShown"/>
</template>

<style scoped>
</style>
