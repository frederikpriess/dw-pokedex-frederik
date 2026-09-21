import { pokemonCard } from "./pokemonCard.js";

export class pokemonList {
    constructor(pokemons) {
        this.pokemons = pokemons
    }

    render() {
        const container = document.createElement("div")
        container.className = "pokemon-list"

        this.pokemons.forEach((pokemon) => {
            const card = new pokemonCard(pokemon)
            container.append(card.render())
            
        });

        return container;
    }
}