import { fetchPokemonList } from "./javascript/pokeapi";
import { pokemonCard } from "./javascript/pokemonCard.js";

const list = await fetchPokemonList()
const root = document.getElementById("root")

root.append(new pokemonCard(list[3]).render)



