import { fetchPokemonList } from "./javascript/api/pokeapi.js";
import { pokemonList } from "./javascript/components/pokemonList.js";
import { Header } from "./javascript/components/Header.js";
import { FavoritesStore } from "./javascript/FavoritesStore.js";

const pokemons = await fetchPokemonList()
const root = document.getElementById("root")

const favorites = new FavoritesStore()
const list = new pokemonList(pokemons, favorites)

const header = new Header((query) => {
    list.filter(query)
})

root.append(header.render(), list.render())



