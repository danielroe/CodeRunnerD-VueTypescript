import AboutPage from '../pages/About.page.vue'
import ListPage from '../pages/List.page.vue'
import PokemonPage from '../pages/Pokemon.page.vue'

export const POKEMON_PAGE_NAME = {
  about: 'about',
  list: 'list',
  pokemon: 'pokemon'
}

export const POKEMON_ROUTES = [
  {
    path: '',
    name: POKEMON_PAGE_NAME.list,
    component: ListPage
  },
  {
    path: 'id',
    name: POKEMON_PAGE_NAME.pokemon,
    component: PokemonPage
  },

  {
    path: 'about',
    name: POKEMON_PAGE_NAME.about,
    component: AboutPage
  }
]
