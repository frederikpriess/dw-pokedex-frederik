export function createHeartPokeballIcon(isFavorited) {
    const wrapper = document.createElement("div")
    wrapper.className = "heart-icon"
    wrapper.innerHTML = `
        <svg viewBox="0 0 100 100" width="20" height="20">
            <path d="M 50 20
                     C 50 5, 20 0, 10 20
                     C 0 38, 25 55, 50 85
                     C 75 55, 100 38, 90 20
                     C 80 0, 50 5, 50 20 Z"
                  fill="${isFavorited ? "#dc0a2d" : "white"}"
                  stroke="#2c2c2c" stroke-width="6" stroke-linejoin="round" />
            <line x1="10" y1="42" x2="90" y2="42" stroke="#2c2c2c" stroke-width="5" />
            <circle cx="50" cy="42" r="10" fill="white" stroke="#2c2c2c" stroke-width="5" />
        </svg>
    `
    return wrapper
}