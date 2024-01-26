<script setup lang="ts">
import { useCocktails } from '@/stores/cocktails'
import type { Cocktail } from '@/types/cocktail.type'

const cocktailStore = useCocktails()

const props = defineProps({
  url: {
    type: String,
    requied: true
  }
})

const cocktail = cocktailStore.cocktails.filter(
  (cocktail: Cocktail) => cocktail.url === props.url
)[0] as Cocktail
</script>
<template>
  <div class="card__content" v-if="cocktail">
    <h2 class="card__title">{{ cocktail?.name }}</h2>
    <p class="card__description">
      {{ cocktail?.category }}, {{ cocktail?.alcoholic }}, {{ cocktail?.glass }}
    </p>
    <div class="card__inner">
      <p class="card__inner-description"></p>
    </div>
  </div>
  <div class="card__image">
    <img :src="cocktail?.image_url" :alt="cocktail?.name" class="card__image-item" loading="lazy" />
  </div>
</template>
<style scoped lang="scss"></style>
