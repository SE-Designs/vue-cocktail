<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/layout/Nav.vue'
</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import '@/assets/reset.scss';
@import '@/assets/main.scss';
</style>
