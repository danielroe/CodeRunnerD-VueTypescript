import { createRouter, createWebHistory } from 'vue-router'
import { POKEMON_ROUTES } from '../modules/pokemon/router/router.ts'
import HomePage from '../views/Home.page.vue'
import NotFoundPage from '../views/NotFound.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pokemon',
      children: POKEMON_ROUTES
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    }
  ]
})

export default router
