import { defineStore } from 'pinia';
import filterCategories from '@/mockdata/filterCategories.json';
import { ref } from 'vue';

export const useStoreCharacters = defineStore('storeCharacters',()=>{
    const requestFilter = ref({ page : 1})
    const filterCategoriesData = ref(filterCategories)
    const charactersLoading = ref(true)
    const charactersCount = ref(0)
    const charactersItems = ref([])
    const lastPage = ref(1);

    const buildUrl = () =>{
        let query = `?page=${requestFilter.value.page}`;

        Object.keys(requestFilter.value).forEach((key) =>{
            if(key !== 'page' && requestFilter.value[key]){
                query+= `&${key} = ${encodeURIComponent(requestFilter.value[key])}`;
            }
        })

        return `https://rickandmortyapi.com/api/character/${query}`
    }

    const getCharacters = async (url)=>{
        charactersLoading.value = true;
        console.log(url)

        try{
            const response = await axios.get(url);
            console.log(response)
            if(response){
                
            }
        }catch(error){

        }

    }

    return{filterCategoriesData,charactersCount,charactersItems,lastPage,getCharacters,buildUrl}
})