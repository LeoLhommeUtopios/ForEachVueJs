<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';


const router = useRouter()
const authStore = useAuthStore()

const user = ref({
    email:"",
    password:""
})

const submitForm = ()=>{
try{
    console.log(user.value)
    authStore.loginUser(user.value.email, user.value.password);
    router.push("/characteres")
}catch(error){
    alert(error.message)
}
}

//Test@123456
</script>

<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="email">Email</label>
                <input type="text" v-model="user.email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="user.password" id="password">
            </div>
            <button>Submit</button>
        </form>
        <p>
            Don’t have an account yet?
            <RouterLink to="/register">Register</RouterLink>
        </p>

    </div>

</template>

<style scoped>

</style>