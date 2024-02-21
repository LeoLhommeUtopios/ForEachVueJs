<script setup>
import { useBooksStore } from '@/stores/books';


const bookStore = useBooksStore();
console.log(bookStore.books)

</script>

<template>

<div v-for="book of bookStore.books">
    <h2>{{book.title}}</h2>
    <p>{{book.author}}</p>

</div>
</template>

<style scoped>

</style>