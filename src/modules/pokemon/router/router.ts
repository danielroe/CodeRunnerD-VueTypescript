import ListPage from '../pages/List.page.vue'
import PokemonPage from '../pages/Pokemon.page.vue'

export const POKEMON_PAGE_NAME = {
  about: 'about',
  list: 'list',
  pokemon: 'pokemon'
}

// for lazy loading use directly import with arrow function
export const POKEMON_ROUTES_MODULE = [
  {
    path: '',
    name: POKEMON_PAGE_NAME.list,
    component: ListPage
  },
  {
    path: ':id',
    name: POKEMON_PAGE_NAME.pokemon,
    component: PokemonPage,
    props: (route: { params: { id: string | number } }) => {
      // return props to component
      return {
        id: +route.params.id
      }
    }
  },

  {
    path: 'about',
    name: POKEMON_PAGE_NAME.about,
    component: () => import('../pages/About.page.vue') //Lazy load
  }
]
