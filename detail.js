import { getQueryParam } from "./javascript/params.js";
import { fetchPokemon, fetchPokemonSpecies } from "./javascript/pokeapi.js";

const name = getQueryParam("name")
const pokemon = await fetchPokemon(name)
const species = await fetchPokemonSpecies(pokemon.species.name)

console.log(pokemon);
console.log(species);

