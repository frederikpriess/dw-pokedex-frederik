import { pokemonCard } from "./pokemonCard.js";

export class pokemonList {
    constructor(pokemons) {
        this.pokemons = pokemons
        this.container = null
    }

    render() {
        const container = document.createElement("div")
        container.className = "pokemon-list"
        this.renderCards(this.pokemons)

        return this.container;
    }

    renderCards(pokemons) {
        this.container.innerHTML = ""
        pokemons.forEach((pokemon) => {
            const card = new pokemonCard(pokemon)
            this.container.append(card.render())
        });
    }

    filter(query) {
        const normalizedQuery = query.trim().toLowerCase()
        const matches = this.pokemons.filter((pokemon) =>
            pokemon.name.includes(normalizedQuery)    
        )
        this.renderCards(matches)
    }
}