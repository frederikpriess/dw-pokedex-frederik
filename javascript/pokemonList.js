import { pokemonCard } from "./pokemonCard.js";

const BATCH_SIZE = 60
const TRIGGER_OFFSET = 5

export class pokemonList {
    constructor(pokemons, favoritesStore) {
        this.pokemons = pokemons
        this.favoritesStore = favoritesStore
        this.container = null
        this.visibleCount = BATCH_SIZE
        this.activeQuery = ""

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.observer.unobserve(entry.target)
                    this.loadMore()
                }
            })
        })
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
        const elements = pokemons.map((pokemon) => {
            const card = new pokemonCard(pokemon, this.favoritesStore, "index.html");
            const element = card.render();
            this.container.append(element);
            return element;
        });

        this.watchTrigger(elements);
    }

    watchTrigger(elements) {
        const triggerIndex = Math.max(elements.length - TRIGGER_OFFSET, 0);
        const triggerCard = elements[triggerIndex];

        if (triggerCard) {
            this.observer.observe(triggerCard);
        }
    }

    getMatches() {
        return this.pokemons.filter((pokemon) => 
            pokemon.name.includes(this.activeQuery)
        )
    }

    loadMore() {
        const source = this.activeQuery ? this.getMatches() : this.pokemons
        if ( this.visibleCount >= source.length) return

        const previousCount = this.visibleCount
        this.visibleCount += BATCH_SIZE
        this.appendCards(source.slice(previousCount, this.visibleCount))

    }

    filter(query) {
        this.activeQuery = query.trim().toLowerCase()
        this.visibleCount = BATCH_SIZE
        this.renderCards(this.getMatches().slice(0, this.visibleCount))
    }
}