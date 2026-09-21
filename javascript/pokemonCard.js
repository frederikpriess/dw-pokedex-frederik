import { getPokemonId, formatPokemonNumber, capitalize } from "./formatters.js";
import { getPokemonImageUrl } from "./pokeapi.js";

export class pokemonCard {
    constructor(pokemon) {
        this.name = pokemon.name
        this.id = getPokemonId(pokemon.url)
    }

    render() {
        const link = document.createElement("a")
        link.className = "card"
        link.href = `detail.html?name=${this.name}`

        const number = document.createElement("span")
        number.className = "card__number"
        number.textContent = formatPokemonNumber(this.id)

        const image = document.createElement("img")
        image.className = "card__image"
        image.src = getPokemonImageUrl(this.id)
        image.alt = "this.name"
        image.loading = "lazy"

        const name = document.createElement("span")
        name.className = "card__name"
        name.textContent = capitalize(this.name)

        link.append(number, image, name)
        return link
    }
}