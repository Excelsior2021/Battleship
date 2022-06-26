const coordinates = document.getElementsByClassName("coordinate");
const active_ships = document.querySelectorAll(".ship")
const restart = document.getElementById("restart-button")
let count = 0
let alreadyShot = []
let alreadySunk = []
let alreadyTaken = []
const ships = [
    { name: "Carrier", size: 5, location: [] },
    { name: "Battleship", size: 4, location: [] },
    { name: "Cruiser", size: 3, location: [] },
    { name: "Submarine", size: 3, location: [] },
    { name: "Destroyer", size: 2, location: [] },
]

function setPosition(ships) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    ships.forEach((ship) => {
        locations(ship, letters)
    })
}

function locations(ship, letters) {
    let direction = Math.floor(Math.random() * 2)
    if (direction === 0) {
        horizontal(ship, letters)
    } else if (direction === 1) {
        vertical(ship, letters)
    }
    checkCollision(ship, letters)
}

function horizontal(ship, letters) {
    const row = letters[Math.floor(Math.random() * 10)]
    const startPos = Math.floor(Math.random() * (10 - ship.size)) + 1;
    for (i = 0; i < ship.size; i++) {
        ship.location.push(row + (startPos + i))
    }
}

function vertical(ship, letters) {
    const startPos = Math.floor(Math.random() * (10 - ship.size))
    const number = Math.floor(Math.random() * 10) + 1
    for (i = 0; i < ship.size; i++) {
        ship.location.push(letters[startPos + i] + number)
    }
}

function checkCollision(ship, letters) {
    ship.location.forEach((coordinate) => {
        if (alreadyTaken.includes(coordinate)) {
            ship.location = []
            locations(ship, letters)
        }
    })
    ship.location.forEach(coordinate => {
        alreadyTaken.push(coordinate)
    })
}

restart.onclick = () => {
    location.reload()
}

function gameOver() {
    removeEventListener("click", log)
}

for (let coordinate of coordinates) {
    coordinate.onclick = log;
}

function log(evt) {
    const id = evt.target.id;
    const coordinate = document.getElementById(id)
    const player_coordinate = document.getElementById("coordinate");
    const confirmation = document.getElementById("confirmation");
    const game_over = document.getElementById("game-over")

    if (alreadySunk.length === ships.length) {
        gameOver()
    } else if (alreadyShotFunction(id, alreadyShot)) {
        confirmation.innerHTML = "You have already shot this coordinate. Please select another coordinate!";
        player_coordinate.innerHTML = "Coordinate: " + id;
    } else {
        if (confirm(id)) {
            coordinate.classList.add("hit")
            confirmation.innerHTML = "You hit a ship!"
        } else {
            coordinate.classList.add("miss")
            confirmation.innerHTML = "Missed!"
        }
        player_coordinate.innerHTML = "Coordinate: " + id;
        count++;
        alreadyShot.push(id)
        sunk(ships, alreadyShot, confirmation)
        if (alreadySunk.length === ships.length) {
            game_over.innerHTML = "You have completed the game. It took you " + count + " shots. Restart the game to play again."
        }
    }
}

function confirm(id) {
    for (let ship of ships) {
        for (let coordinate of ship.location) {
            if (id === coordinate) {
                return true
            }
        }
    }
    return false
}

function alreadyShotFunction(id, alreadyShot) {
    for (let coordinate of alreadyShot) {
        if (id === coordinate) {
            return true
        }
    }
    return false
}

function sunk(ships, alreadyShot, confirmation) {
    for (let ship of ships) {
        const check = []
        for (let coordinateX of ship.location) {
            for (let coordinateY of alreadyShot) {
                if (coordinateX === coordinateY) {
                    check.push(coordinateX)
                }
            }
        } if (check.length === ship.size && !alreadySunk.includes(ship.name)) {
            alreadySunk.push(ship.name);
            active_ships.forEach(active_ship => {
                if (ship.name == active_ship.innerHTML) {
                    active_ship.classList.add("sunk-ship")
                }
            })
            return confirmation.innerHTML = "You sunk the " + ship.name + ".";
        }
    }
}

setPosition(ships)