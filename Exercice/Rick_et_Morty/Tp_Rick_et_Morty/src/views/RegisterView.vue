<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter()

const user = ref({
    email:"",
    password:"",
    confirmPassword:"",
})

const isValidPassword = (password)=>{
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
return regex.test(password);
}

const submitForm = ( )=>{
    if(!isValidPassword(user.value.password)){
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.')
        return;
    }
    if(user.value.password !== user.value.confirmPassword){
        alert('Password do not match')
        return;
    }

    try{
        authStore.registerUser(user.value.email , user.value.password);
        alert('Account created succedddfully')
        router.push("/login")

    }catch(errror){
        alert(errror.message)
    }
}

</script>

<template>

    <form @submit.prevent="submitForm">
        <div>
            <label for="email">Email</label>
            <input type="email" v-model="user.email" id="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" v-model="user.password" id="password">
        </div>
        <div>
            <label for="confirmPassword">confirmPassword</label>
            <input type="password" v-model="user.confirmPassword" id="confirmPassword">
        </div>
        <button>Submit</button>
    </form>

</template>

<style scoped>

</style>