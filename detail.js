import { getQueryParam } from "./javascript/utility/params.js";
import { fetchPokemon, fetchPokemonSpecies } from "./javascript/api/pokeapi.js";
import { DetailView } from "./javascript/components/detailView.js";
import { FavoritesStore } from "./javascript/FavoritesStore.js";

const name = getQueryParam("name");
const pokemon = await fetchPokemon(name);
const species = await fetchPokemonSpecies(pokemon.species.name);
const favorites = new FavoritesStore()

const root = document.getElementById("root");
root.append(new DetailView(pokemon, species, favorites).render());