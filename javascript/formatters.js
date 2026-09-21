export function getPokemonId(url) {
    const parts = url.split("/").filter(Boolean)
    return Number(parts[parts.length - 1])
}

export function formatPokemonNumber(id) {
    return `#${String(id).padStart(5, "0")}`
}

/* makes names uppercase, because the API gives the names in lowercase */
export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

/* added weight and height functions and divided them by 10 to get kg's and meters for the details */
export function formatWeight(hectograms) {
    return `${hectograms / 10} kg`
}

export function formatHeight(decimeters) {
    return `${decimeters / 10} m`
}

/* checks if there is a english description for the pokemon */
export function getEnglishDescription(species) {
    const entry = species.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
    )
    if (!entry) {
        return "No description available."
    }
    /* uses a regular expression to remove odd gaps */
    return entry.flavor_text.replace(/\s+/g, " ")
}