<script setup>
import { useTodoStore } from '@/stores/TodoStore';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { uuid } from 'vue-uuid';

const {addTodo} = useTodoStore()
const router = useRouter()

const newTodo = ref({
    title:"",
    date:""
})

const handleSubmit = ()=>{
    addTodo({
        id: uuid.v1(),
        title: newTodo.value.title,
        date: newTodo.value.date,
        isFinish: false,
    })
    router.push("/");
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model.trim="newTodo.title" type="text" placeholder=" Title" />
        <input v-model.trim="newTodo.date" type="date" />
        <button>Add</button>
    </form>

</template>

<style scoped>

</style>