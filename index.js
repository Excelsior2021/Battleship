const tableEl = document.getElementById("table")
const coordNumsEl = document.getElementById("coord-nums")
const shipsListEl = document.getElementById("ships-list")
const coordinatesEl = document.getElementsByClassName("coord")
const coordinateLog = document.getElementById("coord-log")
const logMessageEl = document.getElementById("log-message")
const gameOverLog = document.getElementById("game-over")
const restartButtonEl = document.getElementById("restart-button")
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

let activeShipsEl = document.querySelectorAll(".ship-item")
let count = 0

function generateCoordNums(coordNumsEl) {
  for (let i = 1; i < 11; i++) {
    const th = document.createElement("th")
    th.classList.add("th")
    th.innerText = i
    coordNumsEl.appendChild(th)
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

function generateTableRows(letters, tableEl) {
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
    tableEl.appendChild(tr)
  }
}

function generateTable(coordNumsEl, letters, tableEl) {
  generateCoordNums(coordNumsEl)
  generateTableRows(letters, tableEl)
}

function generateShipsList(ships) {
  for (const ship of ships) {
    const shipItem = document.createElement("li")
    shipItem.classList.add("ship-item")
    shipItem.innerText = ship.name
    shipsListEl.appendChild(shipItem)
  }
  return document.querySelectorAll(".ship-item")
}

function setPosition(ships, letters, alreadyTaken) {
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
  for (let i = 0; i < ship.size; i++) ship.location.push(row + (startPos + i))
}

function vertical(ship, letters) {
  const number = Math.floor(Math.random() * 10) + 1
  const startPos = Math.floor(Math.random() * (10 - ship.size))
  for (let i = 0; i < ship.size; i++)
    ship.location.push(letters[startPos + i] + number)
}

function checkCollision(ship, alreadyTaken) {
  for (const coordinate of ship.location)
    if (alreadyTaken.includes(coordinate)) return true
  return false
}

function gameOver() {
  removeEventListener("click", e => log(e, ships))
}

function addCoordEvent(ships, coordinatesEl) {
  for (const coordinate of coordinatesEl)
    coordinate.onclick = e => log(e, ships)
}

function log(e, ships) {
  const id = e.currentTarget.id
  const coordinateEl = document.getElementById(id)

  if (alreadySunk.length === ships.length) {
    gameOver(e => log(e, ships))
  } else if (alreadyShotFunction(id, alreadyShot)) {
    logMessageEl.innerText =
      "You have already shot this coordinate. Please select another coordinate!"
    coordinateLog.innerText = `Coordinate: ${id}`
  } else {
    if (confirmHit(id, ships)) {
      coordinateEl.classList.add("hit")
      logMessageEl.innerText = "You hit a ship!"
    } else {
      coordinateEl.classList.add("miss")
      logMessageEl.innerText = "Missed!"
    }
    coordinateLog.innerText = `Coordinate: ${id}`
    count++
    alreadyShot.push(id)
    sunk(ships, activeShipsEl, alreadyShot, alreadySunk, logMessageEl)
    if (alreadySunk.length === ships.length)
      gameOverLog.innerText = `You have completed the game. It took you ${count} shots. Restart the game to play again.`
  }
}

function confirmHit(id, ships) {
  for (const ship of ships)
    for (const coordinate of ship.location) if (id === coordinate) return true
  return false
}

function alreadyShotFunction(id, alreadyShot) {
  for (const coordinate of alreadyShot) if (id === coordinate) return true
  return false
}

function sunk(ships, activeShipsEl, alreadyShot, alreadySunk, logMessageEl) {
  for (const ship of ships) {
    const check = []
    for (const coordinateX of ship.location)
      for (const coordinateY of alreadyShot)
        if (coordinateX === coordinateY) check.push(coordinateX)

    if (check.length === ship.size && !alreadySunk.includes(ship.name)) {
      alreadySunk.push(ship.name)
      activeShipsEl.forEach(activeShip => {
        if (ship.name === activeShip.innerText)
          activeShip.classList.add("sunk-ship")
      })
      logMessageEl.innerText = `You sunk the ${ship.name}.`
    }
  }
}

function startGame() {
  generateTable(coordNumsEl, letters, tableEl)
  activeShipsEl = generateShipsList(ships)
  setPosition(ships, letters, alreadyTaken)
  addCoordEvent(ships, coordinatesEl)
}

startGame()
restartButtonEl.onclick = () => location.reload()

export default {
  generateCoordNums,
  generateTableCells,
  generateTableRows,
  generateTable,
  generateShipsList,
  setPosition,
  locations,
  horizontal,
  vertical,
  checkCollision,
  gameOver,
  addCoordEvent,
  log,
  confirmHit,
  alreadyShotFunction,
  sunk,
}

export const data = {
  ships,
  activeShipsEl,
  alreadyShot,
  alreadyTaken,
  alreadySunk,
  letters,
  logMessageEl,
}
