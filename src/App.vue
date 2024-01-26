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

<style scoped>
/* GLOBAL STYLES */
</style>
