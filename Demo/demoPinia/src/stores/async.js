import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import axios from 'axios';

export const useAsyncStore = defineStore('asyncStore',()=>{
    const data = ref([]);

    const error = ref(null)
    const pendingstate = ref(false)

    async function fetchAsyncData (code){
        error.value = null;
        pendingstate.value = true;
        try{
            const response = await axios.get(`https://api.zippopotam.us/fr/${code}`);
            if(response){
                console.log
                data.value.push(response.data);
                pendingstate.value=false
            }
            else throw new Error("can't fetch")
        }catch(e){
            error.value = e;
            pendingstate.value = false;
        }
    }


    function localStorageSet (){
        const user = {username : "username", password:"Pa$$word"};
        localStorage.setItem('user', JSON.stringify(user));


    }

    function localStorageGet (){
        let user = JSON.parse(localStorage.getItem('user'))|| null;
        console.log(user)
    }

    return {data,error,pendingstate,fetchAsyncData,localStorageSet,localStorageGet}
})