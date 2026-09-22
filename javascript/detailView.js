import { formatPokemonNumber, capitalize, formatName, formatWeight, formatHeight, getEnglishDescription } from "./formatters.js";
import { getPokemonImageUrl } from "./pokeapi.js";
import { TypeBadge } from "./typeBadge.js";
import { StatBar } from "./statbar.js";
import { createHeartPokeballIcon } from "./icons.js";
import { getQueryParam } from "./params.js";

export class DetailView {
    constructor (pokemon, species, favoritesStore) {
        this.pokemon = pokemon
        this.species = species
        this.favoritesStore = favoritesStore
    }

    renderHeart() {
        const heart = createHeartPokeballIcon(this.favoritesStore.has(this.pokemon.name))
        heart.classList.add("detail__heart")

        heart.addEventListener("click", () => {
            this.favoritesStore.toggle(this.pokemon.name)
            heart.replaceWith(this.renderHeart())
        })
        return heart
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
        back.href = getQueryParam("from") ?? "index.html"
        back.textContent = "←"
        back.setAttribute("aria-label", "back to list")

        const name = document.createElement("h1")
        name.className = "detail__name"
        name.textContent = capitalize(this.pokemon.name)

        const heart = this.renderHeart()

        const number = document.createElement("span")
        number.className = "detail__number"
        number.textContent = formatPokemonNumber(this.pokemon.id)

        header.append(back, name, heart, number)
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

        card.append(types, this.renderAbout(), this.renderStats())
        return card
    }

    renderAbout() {
        const section = document.createElement("section")
        section.className = "detail__about"

        const heading = document.createElement("h2")
        heading.className = "detail__heading"
        heading.textContent = "About"

        const abilities = this.pokemon.abilities
        .map((entry) => formatName(entry.ability.name))
        .join(", ")

        const facts = document.createElement("div")
        facts.className = "detail__facts"
        facts.append(
            this.renderFact(formatWeight(this.pokemon.weight), "Weight"),
            this.renderFact(formatHeight(this.pokemon.height), "Height"),
            this.renderFact(abilities, "Abilities")
        )

        const description = document.createElement("p")
        description.className = "detail__description"
        description.textContent = getEnglishDescription(this.species)

        section.append(heading, facts, description)
        return section
    }

    renderFact(value, label) {
        const fact = document.createElement("div")
        fact.className = "detail__fact"

        const valueElement = document.createElement("span")
        valueElement.className = "detail__fact-value"
        valueElement.textContent = value

        const labelElement = document.createElement("span")
        labelElement.className = "detail__fact-label"
        labelElement.textContent = label

        fact.append(valueElement, labelElement)
        return fact
    }

    renderStats() {
        const section = document.createElement("section")
        section.className = "detail__stats"

        const heading = document.createElement("h2")
        heading.className = "detail__heading"
        heading.textContent = "Base Stats"

        section.append(heading)

        this.pokemon.stats.forEach((entry) => {
            section.append(new StatBar(entry.stat.name, entry.base_stat).render())
        })
        
        return section
    }


} 