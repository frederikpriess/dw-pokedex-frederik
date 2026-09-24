import { fetchPokemonsByName } from "./javascript/api/pokeapi.js";
import { pokemonCard } from "./javascript/components/pokemonCard.js";
import { FavoritesStore } from "./javascript/FavoritesStore.js";
import { Header } from "./javascript/components/Header.js";

const favorites = new FavoritesStore()
const root = document.getElementById("root")

const header = new Header(() => {})
root.append(header.render())

if (favorites.favorites.length === 0) {
    const message = document.createElement("p")
    message.className = "empty-message"
    message.textContent = "You haven't favorited any Pokémon yet."
    root.append(message)
} else {
    const pokemons = await fetchPokemonsByName(favorites.favorites)

    const container = document.createElement("div")
    container.className = "pokemon-list"

    pokemons.forEach((pokemon) => {
        const card = new pokemonCard(pokemon, favorites, "favorites.html")
        container.append(card.render())
    })

    root.append(container)
}