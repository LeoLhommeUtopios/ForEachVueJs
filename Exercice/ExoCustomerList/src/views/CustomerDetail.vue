<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const customer = ref({});
const router = useRouter();
const route = useRoute();

onMounted(async ()=>{
    const response = await axios.get("/assets/samplejson/customer"+ route.params.id + ".json")
    customer.value = response.data
})

function goToMainPage(){
    router.push("/")
}

</script>

<template>

<div>
    <h5>{{ customer.name }}</h5>
    <p>email :{{ customer.email  }}</p>
    <p>phone :{{ customer.phone }}</p>
    <p>city :{{ customer.city }}</p>
    <p>state :{{ customer.state }}</p>
    <p>country :{{ customer.country }}</p>
    <p>organization :{{ customer.organization }}</p>
    <p>job profile :{{ customer.jobProfile }}</p>
    <p>Additional info :{{ customer.additionalInfo }}</p>
    <Button @click="goToMainPage()">return</Button>
</div>

</template>

<style scoped>

</style>