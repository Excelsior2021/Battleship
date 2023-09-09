const table = document.getElementById("table")
const coordNums = document.getElementById("coord-nums")
const shipsList = document.getElementById("ships-list")
const restart = document.getElementById("restart-button")
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
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

let coordinates
let active_ships
let coordinate
let coordinateLog
let message
let game_over
let count = 0

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
    for (const td of tds) tr.appendChild(td)
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
  active_ships = document.querySelectorAll(".ship-item")
}

function setPosition(ships, alreadyTaken) {
  ships.forEach(ship => locations(ship, letters, alreadyTaken))
}

function locations(ship, letters, alreadyTaken) {
  const direction = Math.floor(Math.random() * 2)
  if (direction === 0) horizontal(ship, letters)
  else if (direction === 1) vertical(ship, letters)
  if (checkCollision(ship, alreadyTaken)) {
    ship.location = []
    locations(ship, letters, alreadyTaken)
  } else ship.location.forEach(coordinate => alreadyTaken.push(coordinate))
}

function horizontal(ship, letters) {
  const row = letters[Math.floor(Math.random() * 10)]
  const startPos = Math.floor(Math.random() * (10 - ship.size)) + 1
  for (i = 0; i < ship.size; i++) ship.location.push(row + (startPos + i))
}

function vertical(ship, letters) {
  const number = Math.floor(Math.random() * 10) + 1
  const startPos = Math.floor(Math.random() * (10 - ship.size))
  for (i = 0; i < ship.size; i++)
    ship.location.push(letters[startPos + i] + number)
}

function checkCollision(ship, alreadyTaken) {
  ship.location.forEach(coordinate => {
    if (alreadyTaken.includes(coordinate)) return true
  })
  return false
}

function gameOver() {
  removeEventListener("click", log)
}

function addCoordEvents() {
  for (const coordinate of coordinates) coordinate.onclick = log
}

function log(e) {
  const id = e.currentTarget.id
  coordinate = document.getElementById(id)
  coordinateLog = document.getElementById("coord-log")
  message = document.getElementById("message")
  game_over = document.getElementById("game-over")

  if (alreadySunk.length === ships.length) {
    gameOver()
  } else if (alreadyShotFunction(id, alreadyShot)) {
    message.innerText =
      "You have already shot this coordinate. Please select another coordinate!"
    coordinateLog.innerText = `Coordinate: ${id}`
  } else {
    if (confirm(id)) {
      coordinate.classList.add("hit")
      message.innerText = "You hit a ship!"
    } else {
      coordinate.classList.add("miss")
      message.innerText = "Missed!"
    }
    coordinateLog.innerText = `Coordinate: ${id}`
    count++
    alreadyShot.push(id)
    sunk(ships, alreadyShot, message)
    if (alreadySunk.length === ships.length)
      game_over.innerText = `You have completed the game. It took you ${count} shots. Restart the game to play again.`
  }
}

function confirm(id) {
  for (const ship of ships)
    for (const coordinate of ship.location) if (id === coordinate) return true
  return false
}

function alreadyShotFunction(id, alreadyShot) {
  for (const coordinate of alreadyShot) if (id === coordinate) return true
  return false
}

function sunk(ships, alreadyShot, message) {
  for (const ship of ships) {
    const check = []
    for (const coordinateX of ship.location)
      for (const coordinateY of alreadyShot)
        if (coordinateX === coordinateY) check.push(coordinateX)

    if (check.length === ship.size && !alreadySunk.includes(ship.name)) {
      alreadySunk.push(ship.name)
      active_ships.forEach(active_ship => {
        if (ship.name == active_ship.innerText)
          active_ship.classList.add("sunk-ship")
      })
      message.innerText = `You sunk the ${ship.name}.`
    }
  }
}

function startGame() {
  generateTable()
  generateShipsList(ships)
  setPosition(ships, alreadyTaken)
  addCoordEvents()
}

startGame()
restart.onclick = () => location.reload()
