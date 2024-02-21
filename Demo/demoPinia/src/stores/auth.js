import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useAuthStore = defineStore("auth",()=>{
    const user = ref(null);

    const isLoggedIn = computed(()=> !!user.value);

    function login (username,password){
        user.value = {username,password}
    }
    function logout (){
        user.value = null;
    }

    return{user , isLoggedIn, login, logout}
});