import { fetchPokemonList } from "./javascript/pokeapi.js";
import { getPokemonId, formatPokemonNumber } from "./javascript/formatters.js";

const list = await fetchPokemonList()
const id = getPokemonId(list[3].url)

console.log(id);
console.log(formatPokemonNumber(id));



