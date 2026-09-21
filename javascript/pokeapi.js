const BASE_URL = "https://pokeapi.co/api/v2"

export async function fetchPokemonList(limit = 1000000, offset = 0) {
    const response = await fetch (`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)

    if (!response.ok) {
        throw new Error (`Could not fetch Pokémon list (status ${response.status})`)
    }

    const data = await response.json()
    return data.results;
}

export function getPokemonImageUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
