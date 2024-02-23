import { defineStore } from 'pinia';
import filterCategories from '@/mockdata/filterCategories.json';
import { ref } from 'vue';
import axios from 'axios';

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
            if(response){
                charactersCount.value = response.data.info.count || response.data.length;
                charactersItems.value = response.data.results || response.data;
                lastPage.value = response.data.info.pages || 0;
            }else{
                throw new Error('Failed to get characters');
            }
        }catch(error){
            console.error("error getting characters",error);
            charactersItems.value = []
            charactersCount.value = 0;
            lastPage.value = 1;
        }
        charactersLoading.value = false;

    }

    return{filterCategoriesData,charactersCount,charactersItems,lastPage,charactersLoading,getCharacters,buildUrl}
})