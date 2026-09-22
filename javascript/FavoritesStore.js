const STORAGE_KEY = "pokedex-favorites"

export class FavoritesStore {
    constructor() {
        this.favorites = this.load()
    }

    load() {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : [];
    }

    save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites))
    }

    has(name) {
        return this.favorites.includes(name)
    }

    toggle(name) {
        if (this.has(name)) {
            this.favorites = this.favorites.filter((favorite) => favorite != name)
        } else {
            this.favorites.push(name)
        }
        this.save()
    }
}