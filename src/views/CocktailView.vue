<script setup lang="ts">
import Card from '@/components/cocktail/Card.vue'
import { useFetch } from '@/composables/useFetch'
import { useCocktails } from '@/stores/cocktails'
import type { Cocktail } from '@/types/cocktail.type'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const cocktailStore = useCocktails()

const url = computed(() => useRoute().fullPath.split('/')[2])

const fetchData = () => {
  console.log('CHANGE')

  if (!cocktailStore.cocktails.find((c: Cocktail) => c.url === url.value)) {
    // RETRIEVE DATA FROM API
    const { onDataLoaded } = useFetch(url.value) as any

    onDataLoaded((loadedData: any) => {
      console.log('Data loaded:', loadedData)
      if (loadedData && loadedData.drinks && loadedData.drinks.length > 0) {
        const cocktail = {
          url: url.value,
          name: loadedData.drinks[0].strDrink,
          category: loadedData.drinks[0].strCategory,
          alcoholic: loadedData.drinks[0].strAlcoholic,
          glass: loadedData.drinks[0].strGlass,
          image_url: loadedData.drinks[0].strDrinkThumb
        }
        console.log(cocktail)
        console.log(cocktailStore.cocktails)

        cocktailStore.addCocktail(cocktail)
      }
    })
  }
}

onMounted(() => fetchData())
</script>
<template>
  <section>
    <h1>Cocktail View - {{ url }}</h1>
    <Card :url="url" />
  </section>
</template>
<style scoped lang="scss"></style>
