export class Header {
    constructor(onSearch) {
        this.onSearch = onSearch
    }

    render() {
        const header = document.createElement("header")
        header.className = "site-header"

        const titleRow = document.createElement("div")
        titleRow.className = "site-header__title-row"

        const icon = document.createElement("div")
        icon.className = "site-header__icon"
        icon.innerHTML = `
    <svg viewBox="0 0 100 100" width="20" height="20">
        <circle cx="50" cy="50" r="45" fill="white" stroke="#2c2c2c" stroke-width="6" />
        <path d="M 5 50 A 45 45 0 0 1 95 50" fill="#dc0a2d" stroke="#2c2c2c" stroke-width="6" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#2c2c2c" stroke-width="6" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="#2c2c2c" stroke-width="6" />
    </svg>
`

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