import { fetchPokemonList } from "./javascript/pokeapi.js";
const list = await fetchPokemonList()
console.log(list)
console.log(list.length);
console.log(list[list.length - 1]);

