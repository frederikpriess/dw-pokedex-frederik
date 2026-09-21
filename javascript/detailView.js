import { formatPokemonNumber, capitalize } from "./formatters.js";
import { getPokemonImageUrl } from "./pokeapi.js";
import { TypeBadge } from "./typeBadge.js";

export class DetailView {
    constructor (pokemon, species) {
        this.pokemon = pokemon
        this.species = species
    }

    render() {
        const view = document.createElement("div")
        view.className = "detail"

        const primartType = this.pokemon.types[0].type.name
        view.style.setProperty("--type-color", `var(--${primartType}-color, #666666)`)
        view.append(this.renderHeader(), this.renderImage(), this.renderCard())
        return view
    }

    renderHeader() {
        const header = document.createElement("header")
        header.className = "detail__header"

        const back = document.createElement("a")
        back.className = "detail__back"
        back.href = "index.html"
        back.textContent = "←"
        back.setAttribute("aria-label", "back to list")

        const name = document.createElement("h1")
        name.className = "detail__name"
        name.textContent = capitalize(this.pokemon.name)

        const number = document.createElement("span")
        number.className = "detail__number"
        number.textContent = formatPokemonNumber(this.pokemon.id)

        header.append(back, name, number)
        return header
    }

    renderImage() {
        const image = document.createElement("img")
        image.className = "detail__image"
        image.src = getPokemonImageUrl(this.pokemon.id)
        image.alt = this.pokemon.name
        return image
    }

    renderCard() {
        const card = document.createElement("section")
        card.className = "detail__card"

        const types = document.createElement("div")
        types.className = "detail__types"

        this.pokemon.types.forEach((entry) => {
            types.append(new TypeBadge(entry.type.name).render())
        });

        card.append(types)
        return card
    }
}