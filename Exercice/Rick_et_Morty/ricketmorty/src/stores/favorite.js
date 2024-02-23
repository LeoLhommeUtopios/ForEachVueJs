import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useStoreCharacters } from './storeCharacters';

export const favoriteStore = defineStore('favorite', () => {
    const favoriteCharacters = ref([]);
    const onFavoritePage = ref(false);

    const storeCharacters = useStoreCharacters();

    const getFavorite = () => {
        favoriteCharacters.value = JSON.parse(localStorage.getItem('favorite')) || [];
    };

    const addFavorite = (id) => {
        favoriteCharacters.value = JSON.parse(localStorage.getItem('favorite')) || [];
        if (!favoriteCharacters.value.includes(id)) {
            favoriteCharacters.value.push(id);
            localStorage.setItem('favorite', JSON.stringify(favoriteCharacters.value));
            if(onFavoritePage.value){
                storeCharacters.moveToFav(favoriteCharacters.value)
            }
        }
    };

    const removeFavorite = (id) => {
        favoriteCharacters.value = JSON.parse(localStorage.getItem('favorite')) || [];
        if (favoriteCharacters.value.includes(id)) {
            const index = favoriteCharacters.value.indexOf(id);
            favoriteCharacters.value.splice(index, 1);
            localStorage.setItem('favorite', JSON.stringify(favoriteCharacters.value));
            if(onFavoritePage.value){
                storeCharacters.moveToFav(favoriteCharacters.value)
            }
        }
    };

    const isFavorite = (id) => {
        if (favoriteCharacters.value.includes(id)) {
            return true
        }
        return false
    }

    const setOnFavoritePage = (isOnPage) =>{
        onFavoritePage.value = isOnPage;
    }


    return { favoriteCharacters, onFavoritePage,addFavorite, getFavorite, removeFavorite, isFavorite, setOnFavoritePage };
});