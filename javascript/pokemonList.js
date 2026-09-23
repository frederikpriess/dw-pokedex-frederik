import { pokemonCard } from "./pokemonCard.js";

const BATCH_SIZE = 60

export class pokemonList {
    constructor(pokemons, favoritesStore) {
        this.pokemons = pokemons
        this.favoritesStore = favoritesStore
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
        this.appendCards(pokemons)
    }

    appendCards(pokemons) {
        pokemons.forEach((pokemon) => {
            const card = new pokemonCard(pokemon, this.favoritesStore, "index.html")
            this.container.append(card.render())
        });
    }

    loadMore() {
        const previousCount = this.visibleCount
        this.visibleCount += BATCH_SIZE

        const source = this.activeQuery ? this.getMatches() : this.pokemons
        this.appendCards(source.slice(previousCount, this.visibleCount))
    }

    getMatches() {
        return this.pokemons.filter((pokemon) => 
            pokemon.name.includes(this.activeQuery)
        )
    }

    filter(query) {
        this.activeQuery = query.trim().toLowerCase()
        this.visibleCount = BATCH_SIZE
        this.renderCards(this.getMatches().slice(0, this.visibleCount))
    }
}