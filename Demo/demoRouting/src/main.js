import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const contacts = ref([
    {
        id : 1,
        firstname: "Toto",
        lastname:"Tata"
    },
    {
        id : 2,
        firstname: "Titi",
        lastname:"Tutu"
    }
])

const user = ref(null)

function updateUser(newUser){
    user.value = newUser;
}


const app = createApp(App)

app.provide("contacts",{
    contacts
})

app.provide("user",{
    user,
    updateUser,
})

app.use(router)

app.mount('#app')
