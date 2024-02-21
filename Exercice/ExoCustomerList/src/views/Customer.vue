<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const customerList = ref([])

const router = useRouter()

onMounted(async () =>{
    const response = await axios.get("/assets/samplejson/customerlist.json");
    customerList.value = response.data;
    console.log(response.data);
})

function goToDetailPage (id){
    router.push("/customer/"+id)
}
</script>

<template>
 <h1>Customer</h1>

 <div v-for="customer in customerList" :key="customer.id"> 
    <h5>{{ customer.name }}</h5>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>
    <button @click="goToDetailPage(customer.id)">Details</button>
 </div>
</template>

<style scoped>

</style>