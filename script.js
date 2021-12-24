const coordinates = document.getElementsByClassName("coordinate");

for (let i = 0; i < coordinates.length; i++) {
    coordinates[i].onclick = log;
}

function log(evt) {
    let id = evt.target.id;
    let coordinate = document.getElementById(id)
    let player_coordinate = document.getElementById("coordinate");

    if(confirm(id)) {
        coordinate.classList.add("hit")
    }
    player_coordinate.innerHTML = id;

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

ships = [
    {name: "Carrier", size: 5, location: ["A1", "B1", "C1", "D1", "E1"],},
    {name: "Battleship", size: 4, location: ["J7", "J8", "J9", "J10"],},
    {name: "Cruiser", size: 3, location: ["D4", "E4", "F4"],},
    {name: "Submarine", size: 3, location: ["E7", "E8", "E9"],},
    {name: "Destroyer", size: 2, location: ["I2", "I3"],},
]