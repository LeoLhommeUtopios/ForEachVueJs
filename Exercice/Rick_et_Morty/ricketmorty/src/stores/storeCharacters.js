

import { defineStore } from 'pinia';
import filterCategories from '@/mockdata/filterCategories.json';
import { ref } from 'vue';

export const useStoreCharacters = defineStore('storeCharacters', () => {

  const requestFilters = ref({ page: 1 });
  const filterCategoriesData = ref(filterCategories);
  const charactersLoading = ref(true);
  const charactersCount = ref(0);
  const characterItems = ref([]);
  const lastPage = ref(1);

  const buildURL = () => {
    // Commence avec la partie de base de la requête, en incluant le numéro de page actuel.
    let query = `?page=${requestFilters.value.page}`;
    // Parcourt chaque filtre dans requestFilters.
    Object.keys(requestFilters.value).forEach((key) => {
        // Si la clé n'est pas 'page' et que la clé a une valeur définie (non nulle, non vide, etc.),
        // ajoute ce filtre à la chaîne de requête.
        if (key !== 'page' && requestFilters.value[key]) {
            // Utilise encodeURIComponent pour s'assurer que les valeurs de filtre sont correctement
            // encodées pour une URL (par exemple, espaces convertis en %20, etc.)
            query += `&${key}=${encodeURIComponent(requestFilters.value[key])}`;
        }
    });
    // Retourne l'URL complète en ajoutant la chaîne de requête construite à l'URL de base de l'API.
    return `https://rickandmortyapi.com/api/character/${query}`;
};


  const fetchCharacters = async (url) => {
    charactersLoading.value = true;
    console.log(url)
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        charactersCount.value = data.info.count  || data.length;
        characterItems.value = data.results || data;
        lastPage.value = data.info.pages || 0;
      } else {
        throw new Error('Failed to fetch characters');
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
      characterItems.value = [];
      charactersCount.value = 0;
      lastPage.value = 1;
    }
    charactersLoading.value = false;
  };

  const setStoreFilters = async (filterName, subFilter) => {
    if (subFilter !== 'all' && subFilter !== '') {
      requestFilters.value.page = 1;
      requestFilters.value[filterName] = subFilter;
      sessionStorage.setItem(filterName, subFilter);
    } else {
      delete requestFilters.value[filterName];
      sessionStorage.removeItem(filterName);
    }
    await fetchCharacters(buildURL());
  };

  const resetStoreFilters = () => {
    requestFilters.value = { page: 1 };
    sessionStorage.clear();
    fetchCharacters(buildURL());
  };

  const goToPage = (page) => {
    if (page > 0 && page <= lastPage.value) {
      requestFilters.value.page = page;
      fetchCharacters(buildURL());
    }
  };

  const movePage = (page) => {
    const newPage = requestFilters.value.page + page;
    if (newPage <= lastPage.value && newPage >= 1) {
      requestFilters.value.page = newPage;
      fetchCharacters(buildURL());
    }
  };

  const moveToFav = (favList) =>{
    let url = "https://rickandmortyapi.com/api/character/"
    for(let i = 0; i<favList.length; i++){
      url += favList[i]+",";
    }
    console.log(url)
    fetchFavorite(url);
  }

  const fetchFavorite = async (url) => {
    charactersLoading.value = true;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        charactersCount.value = data.length;
        characterItems.value =data;
        lastPage.value = 1;
      } else {
        throw new Error('Failed to fetch characters');
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
      characterItems.value = [];
      charactersCount.value = 0;
      lastPage.value = 1;
    }
    charactersLoading.value = false;
  };


  const setPage = (page) => {
    // Assure que la page est entre 1 et la dernière page
    const validatedPage = Math.max(Math.min(Math.round(page), lastPage.value), 1);
    requestFilters.value.page = validatedPage;
    fetchCharacters(buildURL()); // Supposons que c'est la méthode pour récupérer les personnages
  };


  // Initialize store by fetching characters with base URL
  fetchCharacters(buildURL());

  return {
    requestFilters,
    filterCategoriesData,
    charactersLoading,
    charactersCount,
    characterItems,
    lastPage,
    resetStoreFilters,
    setStoreFilters,
    goToPage,
    movePage,
    setPage,
    moveToFav
  };
});
