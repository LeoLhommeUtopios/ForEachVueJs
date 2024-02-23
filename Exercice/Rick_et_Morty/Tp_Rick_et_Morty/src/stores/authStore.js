import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', ()=>{
    const currentUser = ref(null)
    const isLogged = ref(false)

    const registerUser = (email, password)=>{
        let users = JSON.parse(localStorage.getItem('users')) || []
        users.push({email,password});
        localStorage.setItem('users', JSON.stringify(users));
    }

    const loginUser = (email, password) =>{
        let users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(u => u.email === email && u.password === password)
        console.log(email)
        if(user){
            currentUser.value = email;
            isLogged.value = true;
            localStorage.setItem('currentUser',email);
            localStorage.setItem('isLogged','true');
        }else{
            throw new Error ('Invalid Credentials')
        }
    }

    const logoutUser = ()=>{
        currentUser.value = null
        isLogged.value = false
        localStorage.removeItem('currentUser')
        localStorage.setItem('isLogged','false')
    }

    const checkLoginStatus = ()=>{
        const logged = localStorage.getItem('isLogged') === 'true';
        if(logged){
            currentUser.value = localStorage.getItem('currentUser');
            isLogged.value = true;
        }
    }

    return {currentUser,isLogged,loginUser,registerUser,logoutUser,checkLoginStatus}
})