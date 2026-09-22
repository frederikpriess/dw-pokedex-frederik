import { pokemonCard } from "./pokemonCard.js";

const BATCH_SIZE = 60

export class pokemonList {
    constructor(pokemons) {
        this.pokemons = pokemons
        this.container = null
        this.visibleCount = BATCH_SIZE
    }

    render() {
        this.container = document.createElement("div")
        this.container.className = "pokemon-list"
        this.renderCards(this.pokemons.slice(0, this.visibleCount))

        return this.container;
    }

    renderCards(pokemons) {
        this.container.innerHTML = ""
        pokemons.forEach((pokemon) => {
            const card = new pokemonCard(pokemon)
            this.container.append(card.render())
        });
    }

    loadMore() {
        this.visibleCount += BATCH_SIZE
        this.renderCards(this.pokemons.slice(0, this.visibleCount))
    }

    filter(query) {
        const normalizedQuery = query.trim().toLowerCase()
        const matches = this.pokemons.filter((pokemon) =>
            pokemon.name.includes(normalizedQuery)    
        )
        this.renderCards(matches)
    }
}