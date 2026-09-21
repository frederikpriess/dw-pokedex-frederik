import { getQueryParam } from "./javascript/params.js";
import { fetchPokemon, fetchPokemonSpecies } from "./javascript/pokeapi.js";
import { formatWeight, formatHeight, getEnglishDescription } from "./javascript/formatters.js";
import { TypeBadge } from "./javascript/typeBadge.js";

const name = getQueryParam("name")
const pokemon = await fetchPokemon(name)
const species = await fetchPokemonSpecies(pokemon.species.name)
const root = document.getElementById("root")

pokemon.types.forEach((entry) => {
    root.append(new TypeBadge(entry.type.name).render())
});



