<script setup>
import { RouterLink,RouterView} from 'vue-router';
</script>

<template>
<div>
    about !
</div>
<ul>
    <li><RouterLink to="/about/first"> first</RouterLink> </li>
    <li><RouterLink to="/about/second"> second</RouterLink> </li>
</ul>
<RouterView/>
</template>

<style scoped>

</style>