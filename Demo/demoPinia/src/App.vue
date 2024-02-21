<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';
import { useAsyncStore } from './stores/async';

const authStore = useAuthStore()
const router = useRouter()

const SwitchStatus = ()=>{
  if(authStore.isLoggedIn){
    authStore.logout();
    router.push("/")
  }else{
    router.push("/login")
  }
}


const asyncStore = useAsyncStore()

function setLocal (){
  asyncStore.localStorageSet()
}

function getLocal(){
  asyncStore.localStorageGet()
}
</script>

<template>
  <header>
    <div>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/addbook">Add book</RouterLink>
      <RouterLink to="/async">Async</RouterLink>
      <button @click="setLocal">set</button>
      <button @click="getLocal">get</button>
    </div>
    <div> 
      <button @click="SwitchStatus">{{ authStore.isLoggedIn? "logOut":"logIn" }}</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
