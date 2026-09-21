import { getQueryParam } from "./javascript/params.js";
import { fetchPokemon, fetchPokemonSpecies } from "./javascript/pokeapi.js";
import { formatWeight, formatHeight, getEnglishDescription } from "./javascript/formatters.js";

const name = getQueryParam("name")
const pokemon = await fetchPokemon(name)
const species = await fetchPokemonSpecies(pokemon.species.name)

console.log(pokemon);
console.log(species);

console.log(formatWeight(pokemon.weight));
console.log(formatHeight(pokemon.height));
console.log(getEnglishDescription(species));

