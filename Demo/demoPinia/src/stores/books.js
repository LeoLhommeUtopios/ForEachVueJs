import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBooksStore = defineStore('book', () => {
    const books = ref([])

    const bookForId = computed((bookId) => books.value.find(book => book.id === bookId))

    function addBook (book){
        books.value.push(book);
    }

    function removeBook (book){
        books.value = books.value.filter(b => b !== book);
    }

    return {books,bookForId,addBook,removeBook};
})