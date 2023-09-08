const table = document.getElementById("table")
const coordNums = document.getElementById("coord-nums")
const shipsList = document.getElementById("ships-list")
const restart = document.getElementById("restart-button")
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

let coordinates
let active_ships
let count = 0
const alreadyShot = []
const alreadySunk = []
const alreadyTaken = []
const ships = [
  { name: "Carrier", size: 5, location: [] },
  { name: "Battleship", size: 4, location: [] },
  { name: "Cruiser", size: 3, location: [] },
  { name: "Submarine", size: 3, location: [] },
  { name: "Destroyer", size: 2, location: [] },
]

function generateCoordNums() {
  for (let i = 1; i < 11; i++) {
    const th = document.createElement("th")
    th.classList.add("th")
    th.innerText = i
    coordNums.appendChild(th)
  }
}

function generateTableCells(letter) {
  const tds = []
  for (let i = 1; i < 11; i++) {
    const td = document.createElement("td")
    td.classList.add("coord")
    td.id = `${letter}${i}`
    tds.push(td)
  }
  return tds
}

function generateTableRows() {
  for (let i = 0; i < 10; i++) {
    const letter = letters[i]
    const tr = document.createElement("tr")
    tr.id = letter
    const th = document.createElement("th")
    th.classList.add("th")
    th.innerText = letter
    tr.appendChild(th)

    const tds = generateTableCells(letter)
    for (const td of tds) {
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
}

function generateTable() {
  generateCoordNums()
  generateTableRows()
  coordinates = document.getElementsByClassName("coord")
}

function generateShipsList(ships) {
  for (const ship of ships) {
    const shipItem = document.createElement("li")
    shipItem.classList.add("ship-item")
    shipItem.innerText = ship.name
    shipsList.appendChild(shipItem)
  }
  active_ships = document.querySelectorAll(".ship")
}

function setPosition(ships) {
  ships.forEach(ship => {
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
  const startPos = Math.floor(Math.random() * (10 - ship.size)) + 1
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
  ship.location.forEach(coordinate => {
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

function addCoordEvents() {
  for (const coordinate of coordinates) {
    coordinate.onclick = log
  }
}

function log(evt) {
  const id = evt.target.id
  const coordinate = document.getElementById(id)
  const player_coordinate = document.getElementById("coordinate")
  const confirmation = document.getElementById("confirmation")
  const game_over = document.getElementById("game-over")

  if (alreadySunk.length === ships.length) {
    gameOver()
  } else if (alreadyShotFunction(id, alreadyShot)) {
    confirmation.innerHTML =
      "You have already shot this coordinate. Please select another coordinate!"
    player_coordinate.innerHTML = "Coordinate: " + id
  } else {
    if (confirm(id)) {
      coordinate.classList.add("hit")
      confirmation.innerHTML = "You hit a ship!"
    } else {
      coordinate.classList.add("miss")
      confirmation.innerHTML = "Missed!"
    }
    player_coordinate.innerHTML = "Coordinate: " + id
    count++
    alreadyShot.push(id)
    sunk(ships, alreadyShot, confirmation)
    if (alreadySunk.length === ships.length) {
      game_over.innerHTML =
        "You have completed the game. It took you " +
        count +
        " shots. Restart the game to play again."
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
    }
    if (check.length === ship.size && !alreadySunk.includes(ship.name)) {
      alreadySunk.push(ship.name)
      active_ships.forEach(active_ship => {
        if (ship.name == active_ship.innerHTML) {
          active_ship.classList.add("sunk-ship")
        }
      })
      return (confirmation.innerHTML = "You sunk the " + ship.name + ".")
    }
  }
}

function startGame() {
  generateTable()
  generateShipsList(ships)
  setPosition(ships)
  addCoordEvents()
}

startGame()
