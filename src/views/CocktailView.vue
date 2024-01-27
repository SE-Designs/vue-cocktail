<script setup lang="ts">
import Card from '@/components/cocktail/Card.vue'
import { useFetch } from '@/composables/useFetch'
import { useCocktails } from '@/stores/cocktails'
import type { Cocktail } from '@/types/cocktail.type'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const cocktailStore = useCocktails()

const route = useRoute()
const url = computed(() => route.fullPath.split('/')[2])

watch(
  () => route.fullPath,
  async () => await fetchData()
)

const fetchData = async () => {
  console.log('CHANGE')

  if (!cocktailStore.cocktails.find((c: Cocktail) => c.url === url.value)) {
    // RETRIEVE DATA FROM API
    const { onDataLoaded } = useFetch(url.value) as any

    onDataLoaded((json: any) => {
      console.log('Data loaded:', json)
      if (json && json.drinks && json.drinks.length > 0) {
        const cocktail = {
          url: url.value,
          name: json.drinks[0].strDrink,
          category: json.drinks[0].strCategory,
          alcoholic: json.drinks[0].strAlcoholic,
          glass: json.drinks[0].strGlass,
          image_url: json.drinks[0].strDrinkThumb
        }
        console.log(cocktail)
        console.log(cocktailStore.cocktails)

        cocktailStore.addCocktail(cocktail)
      }
    })
  }
}

onMounted(async () => await fetchData())
</script>
<template>
  <section>
    <h1>Cocktail View - {{ url }}</h1>
    <Card />
  </section>
</template>
<style scoped lang="scss"></style>
