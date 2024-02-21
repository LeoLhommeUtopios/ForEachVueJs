<script setup>
import { RouterView,RouterLink,useRouter } from 'vue-router'
import { inject } from 'vue';


const {user,updateUser} = inject('user');
const router = useRouter();

function logOut (){
  updateUser(null)
  router.push('/')
}

function login (){
  updateUser({name:"user"});
}

function switchStatusUser (){
  if(user.value) logOut();
  else login()
}

</script>

<template>
  <header class="header">
    <div> head</div>
    <RouterLink  class="link" to="/">Home</RouterLink>
    <RouterLink class="link" to="/contact">Contact</RouterLink>
    <RouterLink class="link" to="/private">private</RouterLink>
    <button @click="switchStatusUser">{{ !user? "Sign In" : "Sign Out" }}</button>
  </header>
  <RouterView />
</template>

<style scoped>
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.link{
  margin-left: 10px;
}
</style>
