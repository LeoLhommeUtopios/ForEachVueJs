<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const newUser = ref({
    username:"",
    password:"",
})

const router = useRouter();
const authStore = useAuthStore();

const handleSubmit = ()=>{
    authStore.login(newUser.value.username,newUser.value.password)
    router.push("/")
}

</script>

<template>

<form @submit.prevent="handleSubmit">
    <input v-model.trim="newUser.username" type="text" placeholder="Username">
    <input v-model.trim="newUser.password" type="password" >
    <button>add</button>

</form>

</template>

<style scoped>

</style>