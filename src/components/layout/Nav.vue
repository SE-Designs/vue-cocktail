<script setup lang="ts">
import { cocktails } from '@/const/cocktails'
import type { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="nav">
    <RouterLink
      class="nav__link"
      :to="`/cocktails/${cocktail}`"
      v-for="cocktail in cocktails"
      :key="cocktail"
    >
      {{ cocktail }}
    </RouterLink>
    <RouterLink class="nav__link" to="/404">404</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;

  & .nav__link {
    width: fit-content;
  }
}
</style>
