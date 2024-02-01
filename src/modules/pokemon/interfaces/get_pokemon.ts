export interface Sprites {
  front_default: string
}

export interface Pokemon {
  sprites: Sprites
  name: string
}

export interface BaseComponentData {
  pokemon: Pokemon | null
}
