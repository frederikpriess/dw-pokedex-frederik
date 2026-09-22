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

root.append(searchInput, list.render())



