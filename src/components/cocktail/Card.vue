<script setup lang="ts">
import { useCocktails } from '@/stores/cocktails'
import type { Cocktail } from '@/types/cocktail.type'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const cocktailStore = useCocktails()

const route = useRoute()

const url = computed(() => route.fullPath.split('/')[2])

const cocktail = computed(
  () => cocktailStore.getCocktails.filter((cocktail: Cocktail) => cocktail.url === url.value)[0]
)
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
<style scoped lang="scss">
.card__image {
  max-width: 360px;
  max-height: 360px;
}
</style>
