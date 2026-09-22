import { pokemonCard } from "./pokemonCard.js";

const BATCH_SIZE = 60

export class pokemonList {
    constructor(pokemons) {
        this.pokemons = pokemons
        this.container = null
        this.visibleCount = BATCH_SIZE
        this.activeQuery = ""
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

    getMatches() {
        return this.pokemons.filter((pokemon) => 
            pokemon.name.includes(this.activeQuery)
        )
    }

    loadMore() {
        this.visibleCount += BATCH_SIZE

        if (this.activeQuery) {
            this.renderCards(this.getMatches().slice(0, this.visibleCount))
        }   else {
            this.renderCards(this.pokemons.slice(0, this.visibleCount))
        }
    }

    filter(query) {
        this.activeQuery = query.trim().toLowerCase()
        this.visibleCount = BATCH_SIZE
        this.renderCards(this.getMatches().slice(0, this.visibleCount))
    }
}