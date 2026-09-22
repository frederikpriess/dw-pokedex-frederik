import { fetchPokemonList } from "./javascript/pokeapi.js";
import { pokemonList } from "./javascript/pokemonList.js";

const pokemons = await fetchPokemonList()
const root = document.getElementById("root")

const searchInput = document.createElement("input")
searchInput.type = "search"
searchInput.className = "seach-input"
searchInput.placeholder = "Search Pokémon.."

const list = new pokemonList(pokemons)

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

root.append(searchInput, list.render(), sentinel)



