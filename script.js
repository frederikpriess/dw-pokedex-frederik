import { fetchPokemonList } from "./javascript/pokeapi.js";
import { pokemonList } from "./javascript/pokemonList.js";
import { Header } from "./javascript/header.js";
import { FavoritesStore } from "./javascript/FavoritesStore.js";

const pokemons = await fetchPokemonList()
const root = document.getElementById("root")

const favorites = new FavoritesStore()

const list = new pokemonList(pokemons)

const header = new Header((query) => {
    list.filter(query)
})

const sentinel = document.createElement("div")
sentinel.className = "sentinel"

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        list.loadMore()
    }
})

observer.observe(sentinel)

root.append(header.render(), list.render(), sentinel)



