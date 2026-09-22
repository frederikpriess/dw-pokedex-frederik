import { fetchPokemonList } from "./javascript/pokeapi.js";
import { pokemonList } from "./javascript/pokemonList.js";
import { Header } from "./javascript/header.js";

const pokemons = await fetchPokemonList()
const root = document.getElementById("root")

const list = new pokemonList(pokemons)

const header = new Header((query) => {
    list.filter(query)
})

searchInput.addEventListener("input", () => {
    list.filter(searchInput.value)
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



