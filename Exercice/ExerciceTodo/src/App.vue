<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink class="link" to="/">Todo List</RouterLink>
    <RouterLink class="link" to="/add">Add Todo</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;  
  padding: 15px;
}

.link{
  border: solid black 1px;
  border-radius: 5px;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  padding: 5px;
}
</style>
