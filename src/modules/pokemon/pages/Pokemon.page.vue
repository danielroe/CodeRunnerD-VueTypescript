<template>
    <h1>Pokemon page {{ id }}</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" srcset="">
    </div>
</template>

<script lang="ts">
import type {BaseComponentData} from '@/modules/pokemon/interfaces/get_pokemon.ts';

    export default{
        name: 'PokemonPage',
        props:{
            id:{
                type:Number,
                required:true
            }
        },
        data():BaseComponentData{
            return {
                pokemon:null
            }
        },
        created(){
            this.getPokemon()
        },
        methods:{
            async getPokemon(){
                try {
                    const pokemon= await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(data=>data.json())
                    this.pokemon=pokemon
                    console.log("pokemon",pokemon)
                } catch (error) {
                    console.error(error)
                    this.$router.push('/pokemon')
                }
                
            }
        }
    }
</script>@/modules/pokemon/interfaces/get_pokemon