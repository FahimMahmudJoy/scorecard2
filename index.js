let homeScore = 0
let guestScore = 0

let h = document.getElementsByClassName('score-home')[0]
let g = document.getElementsByClassName('score-guest')[0]

function add1home() {
    homeScore += 1
    h.textContent = homeScore
}

function add2home() {
    homeScore += 2
    h.textContent = homeScore
}

function add3home() {
    homeScore += 3
    h.textContent = homeScore
}

function add1guest() {
    guestScore += 1
    g.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    g.textContent = guestScore
}

function add3guest() {
    guestScore += 3
    g.textContent = guestScore
}

function newgame() {
    homeScore = 0
    guestScore = 0
    h.textContent = "0"
    g.textContent = "0"
}