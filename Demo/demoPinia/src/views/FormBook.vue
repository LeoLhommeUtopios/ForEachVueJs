<script setup>
import { useBooksStore } from '@/stores/books';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { uuid } from 'vue-uuid';
const newBook = ref({
    title:"",
    author:"",
    description:"",
    numberOfPage:0
})

const router = useRouter();
const bookStore = useBooksStore();

const handleSubmit = ()=>{
    bookStore.addBook({
        title: newBook.value.title,
        author: newBook.value.author,
        description: newBook.value.description,
        numberOfPage:newBook.value.numberOfPage,
        id: uuid.v1()
    })
    router.push("/")
}
</script>

<template>

<form @submit.prevent="handleSubmit">
    <input v-model.trim="newBook.title" type="text" placeholder="title">
    <input v-model.trim="newBook.author" type="text" placeholder="author">
    <input v-model.trim="newBook.description" type="text" placeholder="description">
    <input v-model.trim="newBook.numberOfPage" type="number" min="0" placeholder="numberOfPage">
    <button>add</button>

</form>
</template>

<style scoped>

</style>