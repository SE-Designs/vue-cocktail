import { createRouter, createWebHistory } from 'vue-router'

import CocktailView from '@/views/CocktailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { cocktails } from '@/const/cocktails'

function isValidCocktail(cocktail: string) {
  return cocktails.includes(cocktail)
}

const routes = [
  {
    path: '/',
    redirect: { path: `/cocktails/${cocktails[0]}` }
  },
  {
    path: '/cocktails/:cocktail',
    name: 'cocktail-page',
    component: CocktailView,
    meta: {
      title: 'Cocktail page'
    },
    beforeEnter: (to: any, from: any, next: any) => {
      const cocktail = to.params.cocktail
      if (isValidCocktail(cocktail)) {
        next()
      } else {
        next({ name: '404-page' })
      }
    }
  },
  {
    path: '/404',
    name: '404-page',
    component: NotFoundView,
    meta: {
      title: 'Not found page'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: '/404' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
