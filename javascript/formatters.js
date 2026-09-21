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