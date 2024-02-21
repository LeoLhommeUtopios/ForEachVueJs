<script setup>
import { useRoute } from 'vue-router';
import { inject } from 'vue';

const {contacts} = inject('contacts');

const route = useRoute()

const {contactId} = route.params

const contactFound = contacts.value.find(c => c.id == contactId);
console.log(contactFound)

</script>

<template>
<h1>detailContact</h1>

<div>
    <h3>Id : {{ contactFound.id }}</h3>
    <ul>
        <li>firstname : {{ contactFound.firstname }}</li>
        <li>lastname : {{ contactFound.lastname }}</li>
    </ul>
</div>

</template>

<style scoped>

</style>