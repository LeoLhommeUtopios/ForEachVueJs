<script setup>
import { useTodoStore } from '@/stores/TodoStore';
import { useRoute, useRouter } from 'vue-router';


const todoStore = useTodoStore()


const route = useRoute()
const router = useRouter()

const {id} = route.params

let todo = todoStore.getTodo(id);

</script>

<template>

<div>
    <h3>{{todo.title}}</h3>
    <p>{{todo.date}}</p>
    <p>{{ todo.isFinish? "clear" : "unclear" }}</p>
</div>
</template>

<style scoped>

</style>