import { getQueryParam } from "./javascript/params.js";
import { fetchPokemon, fetchPokemonSpecies } from "./javascript/pokeapi.js";
import { DetailView } from "./javascript/detailView.js";

const name = getQueryParam("name");
const pokemon = await fetchPokemon(name);
const species = await fetchPokemonSpecies(pokemon.species.name);

const root = document.getElementById("root");
root.append(new DetailView(pokemon, species).render());