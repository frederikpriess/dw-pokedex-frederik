import { getPokemonId, formatPokemonNumber, capitalize } from "./formatters.js";
import { getPokemonImageUrl } from "./pokeapi.js";
import { createHeartPokeballIcon } from "./icons.js";

export class pokemonCard {
    constructor(pokemon, favoritesStore) {
        this.name = pokemon.name
        this.id = pokemon.id ?? getPokemonId(pokemon.url)
        this.favoritesStore = favoritesStore
    }

    renderHeart() {
        const heart = createHeartPokeballIcon(this.favoritesStore.has(this.name));
        heart.classList.add("card__heart");

        heart.addEventListener("click", (event) => {
            event.preventDefault();
            this.favoritesStore.toggle(this.name);
            heart.replaceWith(this.renderHeart());
        });

        return heart;
    }

    render() {
        const link = document.createElement("a")
        link.className = "card"
        link.href = `detail.html?name=${this.name}`

        const number = document.createElement("span")
        number.className = "card__number"
        number.textContent = formatPokemonNumber(this.id)

        const heart = this.renderHeart();

        const image = document.createElement("img")
        image.className = "card__image"
        image.src = getPokemonImageUrl(this.id)
        image.alt = this.name
        image.loading = "lazy"

        const name = document.createElement("span")
        name.className = "card__name"
        name.textContent = capitalize(this.name)

        link.append(number, heart, image, name)
        return link
    }
}