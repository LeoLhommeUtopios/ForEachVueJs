<script setup>
import TodoItem from "../composants/TodoItem.vue"
import { useTodoStore } from '../stores/TodoStore';

const todoStore = useTodoStore()

</script>

<template>
    <div v-for="todo in todoStore.todos" :key="todo.id">
        <TodoItem :todo="todo"/>
    </div>

</template>

<style scoped>

</style>