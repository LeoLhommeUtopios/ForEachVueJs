<script setup>
import { inject } from 'vue';
import { RouterLink} from 'vue-router';

const {contacts} = inject('contacts');
</script>

<template>
<h1>Contact view</h1>

<h3> - list contacts</h3>

<ul>
    <li v-for="c of contacts">
        <RouterLink :to="`/contact/${c.id}`">{{ c.firstname + " " + c.lastname }}</RouterLink>
    </li>
</ul>
</template>

<style scoped>

</style>