import { expect, test } from "vitest"
import functions, { data } from "../index"

const coordinate = "A3"
const coordinate2 = "B1"
const coordinates = ["B1", "B2", "B3", "B4", "B5"]

test("ship is in the location of chosen coordinate", () => {
  const ships = JSON.parse(JSON.stringify(data.ships))
  ships[0].location.push(coordinate)
  expect(functions.confirmHit(coordinate, ships)).toBeTruthy()
})

test("ship is not in the location of chosen coordinate", () => {
  const ships = JSON.parse(JSON.stringify(data.ships))
  expect(functions.confirmHit(coordinate, ships)).toBeFalsy()
})

test("ship has been already shot", () => {
  const alreadyShot = JSON.parse(JSON.stringify(data.alreadyShot))
  alreadyShot.push(coordinate)
  expect(functions.alreadyShotFunction(coordinate, alreadyShot)).toBeTruthy()
})

test("ship has been already shot", () => {
  const alreadyShot = JSON.parse(JSON.stringify(data.alreadyShot))
  expect(functions.alreadyShotFunction(coordinate, alreadyShot)).toBeFalsy()
})

test("ship to have n coordinates equal to length of ship n", () => {
  const ships = JSON.parse(JSON.stringify(data.ships))
  const letters = JSON.parse(JSON.stringify(data.letters))
  const alreadyTaken = JSON.parse(JSON.stringify(data.alreadyTaken))
  const ship = ships[0]
  functions.locations(ship, letters, alreadyTaken)
  expect(ship.size).toBe(ship.location.length)
})

test("check for collisions is true", () => {
  const ships = JSON.parse(JSON.stringify(data.ships))
  const alreadyTaken = JSON.parse(JSON.stringify(data.alreadyTaken))
  const ship = ships[0]
  ship.location.push(...coordinates)
  alreadyTaken.push(coordinate2)
  expect(functions.checkCollision(ship, alreadyTaken)).toBeTruthy()
})

test("check for collisions is false", () => {
  const ships = JSON.parse(JSON.stringify(data.ships))
  const alreadyTaken = JSON.parse(JSON.stringify(data.alreadyTaken))
  const ship = ships[0]
  ship.location.push(...coordinates)
  alreadyTaken.push(coordinate)
  expect(functions.checkCollision(ship, alreadyTaken)).toBeFalsy()
})
