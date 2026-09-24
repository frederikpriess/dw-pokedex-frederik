import { capitalize } from "../utility/formatters.js";

export class TypeBadge {
    constructor(typeName) {
        this.typeName = typeName;
    }

    render() {
        const badge = document.createElement("span")
        badge.className = "type-badge"
        badge.textContent = capitalize(this.typeName)
        badge.style.setProperty("--type-color", `var(--${this.typeName}-color, #666666`)
        return badge
    }
}