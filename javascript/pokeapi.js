const BASE_URL = "https://pokeapi.co/api/v2"

export async function fetchPokemonList(limit = 1000000, offset = 0) {
    const data = await fetchJson(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return data.results;
}

export function getPokemonImageUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

async function fetchJson(url) {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error (`Request failed (status ${response.status}): ${url}`)
    }
    return response.json()
}

export function fetchPokemon(name) {
    return fetchJson(`${BASE_URL}/pokemon-species/${name}`)
    
}
