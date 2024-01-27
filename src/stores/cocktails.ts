import { computed, ref, type Ref } from 'vue'

import type { Cocktail } from '@/types/cocktail.type'
import { defineStore } from 'pinia'

export const useCocktails = defineStore('cocktails', () => {
  const cocktails: Ref<Cocktail[]> = ref([])

  const getCocktails = computed(() => cocktails.value)

  function addCocktail(cocktail: Cocktail) {
    // CACHE COCKTAIL IN STORE
    cocktails.value.push(cocktail)
  }

  return { cocktails, getCocktails, addCocktail }
})
