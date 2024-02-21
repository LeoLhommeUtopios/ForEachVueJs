<script setup>
import { RouterLink } from 'vue-router'
import { useTodoStore } from '@/stores/TodoStore';

const {todo} = defineProps(["todo"])

const todoStore = useTodoStore()


</script>

<template>

<div>
    <h3>{{todo.title}}</h3>
    <RouterLink :to="`/detail/${todo.id}`">Details</RouterLink>
    <button @click="todoStore.updateStatus(todo.id)">{{ todo.isFinish? "clear" : "unclear" }}</button>
    <button @click="todoStore.removeTodo(id)">Remove</button>
</div>
</template>

<style scoped>

</style>