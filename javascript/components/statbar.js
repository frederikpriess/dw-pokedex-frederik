const STAT_LABELS = {
    "hp": "HP",
    "attack": "ATK",
    "defense": "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    "speed": "SPD",
}

const MAX_STAT = 255;

export class StatBar {
    constructor(statName, value) {
        this.statName = statName
        this.value = value
    }

    render() {
        const row = document.createElement("div")
        row.className = "stat-bar"

        const label = document.createElement("span")
        label.className = "stat-bar__label"
        label.textContent = STAT_LABELS[this.statName] ?? this.statName

        const value = document.createElement("span")
        value.className = "stat-bar__value"
        value.textContent = String(this.value).padStart(3, "0")

        const track = document.createElement("div")
        track.className = "stat-bar__track"

        const fill = document.createElement("div")
        fill.className = "stat-bar__fill"
        fill.style.width = `${Math.min((this.value / MAX_STAT) * 100, 100)}%`

        track.append(fill)
        row.append(label, value, track)
        return row
        
    }
}