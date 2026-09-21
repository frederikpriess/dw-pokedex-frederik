import { fetchPokemonList } from "./javascript/pokeapi.js";
const list = await fetchPokemonList()
console.log(list)