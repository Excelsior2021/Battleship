const coordinates = document.getElementsByClassName("coordinate");
let count = 0
let alreadyShot = []
let alreadySunk = []
const ships = [
    {name: "Carrier", size: 5, location: ["A1", "B1", "C1", "D1", "E1"],},
    {name: "Battleship", size: 4, location: ["J7", "J8", "J9", "J10"],},
    {name: "Cruiser", size: 3, location: ["D4", "E4", "F4"],},
    {name: "Submarine", size: 3, location: ["E7", "E8", "E9"],},
    {name: "Destroyer", size: 2, location: ["I2", "I3"],},
]

for (let i = 0; i < coordinates.length; i++) {
    coordinates[i].onclick = log;
}

function log(evt) {
    let id = evt.target.id;
    let coordinate = document.getElementById(id)
    let player_coordinate = document.getElementById("coordinate");
    let confirmation = document.getElementById("confirmation");
    let shots = document.getElementById("shots");

    if(alreadyShotFunction(id, alreadyShot)) {
        confirmation.innerHTML = "You have already shot this coordinate. Select another!";
        player_coordinate.innerHTML = id;
    } else {
            if(confirm(id)) {
                coordinate.classList.add("hit")
                confirmation.innerHTML = "You hit a ship!"
            } else {
                coordinate.classList.add("miss")
                confirmation.innerHTML = "Missed!"
            }
            player_coordinate.innerHTML = id;
            count++;
            shots.innerHTML = "Shots taken: " + count
            alreadyShot.push(id)
            sunk(ships, alreadyShot, confirmation)
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
    for(i=0;i<alreadyShot.length;i++) {
        if(id===alreadyShot[i]) {
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
            return confirmation.innerHTML = "You sunk the " + ships[i].name;
        }
    } 
}