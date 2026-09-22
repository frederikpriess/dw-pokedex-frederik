export class Header {
    constructor(onSearch) {
        this.onSearch = onSearch
    }

    render() {
        const header = document.createElement("header")
        header.className = "site-header"

        const titleRow = document.createElement("div")
        titleRow.className = "site-header__title-row"

        const icon = document.createElement("span")
        icon.className = "site-header__icon"

        const title = document.createElement("h1")
        title.className = " site-header__title"
        title.textContent = "Pokédex"

        titleRow.append(icon, title)

        const searchInput = document.createElement("input")
        searchInput.type = "search"
        searchInput.className =  "site-header__search"
        searchInput.placeholder = "Search"

        searchInput.addEventListener("input", () => {
            this.onSearch(searchInput.value)
        })

        header.append(titleRow, searchInput)
        return header
    }
}