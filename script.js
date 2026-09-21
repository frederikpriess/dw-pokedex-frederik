import { fetchPokemonList } from "./javascript/pokeapi.js";
import { pokemonList } from "./javascript/pokemonList.js";

const pokemons = await fetchPokemonList()
const root = document.getElementById("root")

root.append(new pokemonList(pokemons).render())



