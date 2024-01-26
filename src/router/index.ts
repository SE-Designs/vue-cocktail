import { createRouter, createWebHistory } from 'vue-router'

import CocktailView from '@/views/CocktailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cocktail-page',
      component: CocktailView,
      meta: {
        title: 'Cocktail page'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-page',
      component: NotFoundView,
      meta: {
        title: 'Not found page'
      }
    }
  ]
})

export default router
