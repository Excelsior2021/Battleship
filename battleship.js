const coordinates = document.getElementsByClassName("coordinate");
const active_ships = document.querySelectorAll(".ship")
const restart = document.getElementById("restart-button")
let count = 0
let alreadyShot = []
let alreadySunk = []
let alreadyTaken = []
const ships = [
    {name: "Carrier", size: 5, location: [],},
    {name: "Battleship", size: 4, location: [],},
    {name: "Cruiser", size: 3, location: [],},
    {name: "Submarine", size: 3, location: [],},
    {name: "Destroyer", size: 2, location: [],},
]

function setPosition(ships) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

    ships.forEach((ship) => {
        locations(ship, letters)
    })
}

function locations(ship, letters) {
    let direction = Math.floor(Math.random()*2)
    if(direction===0) {
        let index = Math.floor(Math.random()*10)
        let row = letters[index]
        horizontal(ship, row)
    } else if(direction===1) {
        vertical(ship, letters)
    }
    checkCollision(ship, letters)
}

function horizontal(ship, row) {
    let startPos = Math.floor(Math.random()*(10-ship.size)) + 1;
    for(i=0;i<ship.size;i++) {
        let coordinate = row + (startPos+i)
        ship.location.push(coordinate)
    }
}

function vertical(ship, letters) {
    let startPos = Math.floor(Math.random()*(10-ship.size))
    const number = Math.floor(Math.random()*10) + 1
    for(i=0;i<ship.size;i++) {
        ship.location.push(letters[startPos+i] + number)
    }
}

function checkCollision(ship, letters) {
    ship.location.forEach((coordinate) => {
        if(alreadyTaken.includes(coordinate)) {
            ship.location = []
            locations(ship, letters)
        } 
    })
    ship.location.forEach((coordinate) => {
        alreadyTaken.push(coordinate)
    })
}

restart.onclick = () => {
    location.reload()
}

function gameOver() {
    removeEventListener("click", log)
}

for (let i = 0; i < coordinates.length; i++) {
    coordinates[i].onclick = log;
}

function log(evt) {
    let id = evt.target.id;
    let coordinate = document.getElementById(id)
    let player_coordinate = document.getElementById("coordinate");
    let confirmation = document.getElementById("confirmation");
    // let shots = document.getElementById("shots");
    let game_over = document.getElementById("game-over")

    if(alreadySunk.length===ships.length) {
        gameOver()
    }
    else if (alreadyShotFunction(id, alreadyShot)) {
        confirmation.innerHTML = "You have already shot this coordinate. Select another coordinate!";
        player_coordinate.innerHTML = "Coordinate: " + id;
    } else {
        if(confirm(id)) {
            coordinate.classList.add("hit")
            confirmation.innerHTML = "You hit a ship!"
        } else {
            coordinate.classList.add("miss")
            confirmation.innerHTML = "Missed!"
        }
        player_coordinate.innerHTML = "Coordinate: " + id;
        count++;
        // shots.innerHTML = "Shots taken: " + count
        alreadyShot.push(id)
        sunk(ships, alreadyShot, confirmation)
        if(alreadySunk.length===ships.length) {
            game_over.innerHTML = "You have completed the game. It took you " + count + " shots. Restart the game to play again."
        }
    }
}

function confirm(id) {
    for(let i = 0; i<ships.length; i++) {
        for(let j = 0; j<ships[i].location.length; j++) {
            if(id === ships[i].location[j]) {
                return true
            }
        }
    } 
    return false
}

function alreadyShotFunction(id, alreadyShot) {
    for(i=0; i<alreadyShot.length; i++) {
        if(id === alreadyShot[i]) {
            return true
        }
    }
    return false
}

function sunk(ships, alreadyShot, confirmation) {
    for(i=0;i<ships.length;i++) {
        const check = []
        for(let x in ships[i].location) {
            for(let y in alreadyShot) {
                if(ships[i].location[x]===alreadyShot[y]) {
                    check.push(ships[i].location[x])
                }
            }
        } if(check.length === ships[i].size && !alreadySunk.includes(ships[i].name)) {
            alreadySunk.push(ships[i].name);
            active_ships.forEach((ship) => {
                if(ships[i].name == ship.innerHTML) {
                    ship.classList.add("sunk-ship")
                }
            })
            return confirmation.innerHTML = "You sunk the " + ships[i].name + ".";
        } 
    } 
}

setPosition(ships)