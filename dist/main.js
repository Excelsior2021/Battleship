;(() => {
  "use strict"
  const t = document.getElementById("table"),
    e = document.getElementById("coord-nums"),
    n = document.getElementById("ships-list"),
    o = document.getElementsByClassName("coord"),
    c = document.getElementById("coord-log"),
    i = document.getElementById("log-message"),
    s = document.getElementById("game-over"),
    r = document.getElementById("restart-button"),
    a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    l = [],
    d = [],
    u = [
      { name: "Carrier", size: 5, location: [] },
      { name: "Battleship", size: 4, location: [] },
      { name: "Cruiser", size: 3, location: [] },
      { name: "Submarine", size: 3, location: [] },
      { name: "Destroyer", size: 2, location: [] },
    ]
  let m = document.querySelectorAll(".ship-item"),
    f = 0
  function h(t) {
    const e = []
    for (let n = 1; n < 11; n++) {
      const o = document.createElement("td")
      o.classList.add("coord"), (o.id = `${t}${n}`), e.push(o)
    }
    return e
  }
  function p(t, e, n) {
    const o = Math.floor(2 * Math.random())
    0 === o
      ? (function (t, e) {
          const n = e[Math.floor(10 * Math.random())],
            o = Math.floor(Math.random() * (10 - t.size)) + 1
          for (let e = 0; e < t.size; e++) t.location.push(n + (o + e))
        })(t, e)
      : 1 === o &&
        (function (t, e) {
          const n = Math.floor(10 * Math.random()) + 1,
            o = Math.floor(Math.random() * (10 - t.size))
          for (let c = 0; c < t.size; c++) t.location.push(e[o + c] + n)
        })(t, e),
      (function (t, e) {
        for (const n of t.location) if (e.includes(n)) return !0
        return !1
      })(t, n)
        ? ((t.location = []), p(t, e, n))
        : t.location.forEach(t => n.push(t))
  }
  function g() {
    removeEventListener("click", t => E(t, u))
  }
  function E(t, e) {
    const n = t.currentTarget.id,
      o = document.getElementById(n)
    d.length === e.length
      ? g()
      : (function (t, e) {
          for (const n of e) if (t === n) return !0
          return !1
        })(n, l)
      ? ((i.innerText =
          "You have already shot this coordinate. Please select another coordinate!"),
        (c.innerText = `Coordinate: ${n}`))
      : ((function (t, e) {
          for (const n of e) for (const e of n.location) if (t === e) return !0
          return !1
        })(n, e)
          ? (o.classList.add("hit"), (i.innerText = "You hit a ship!"))
          : (o.classList.add("miss"), (i.innerText = "Missed!")),
        (c.innerText = `Coordinate: ${n}`),
        f++,
        l.push(n),
        (function (t, e, n, o, c) {
          for (const i of t) {
            const t = []
            for (const e of i.location) for (const o of n) e === o && t.push(e)
            t.length !== i.size ||
              o.includes(i.name) ||
              (o.push(i.name),
              e.forEach(t => {
                i.name === t.innerText && t.classList.add("sunk-ship")
              }),
              (c.innerText = `You sunk the ${i.name}.`))
          }
        })(e, m, l, d, i),
        d.length === e.length &&
          (s.innerText = `You have completed the game. It took you ${f} shots. Restart the game to play again.`))
  }
  ;(function (t, e, n) {
    ;(function (t) {
      for (let e = 1; e < 11; e++) {
        const n = document.createElement("th")
        n.classList.add("th"), (n.innerText = e), t.appendChild(n)
      }
    })(t),
      (function (t, e) {
        for (let n = 0; n < 10; n++) {
          const o = t[n],
            c = document.createElement("tr")
          c.id = o
          const i = document.createElement("th")
          i.classList.add("th"), (i.innerText = o), c.appendChild(i)
          const s = h(o)
          for (const t of s) c.appendChild(t)
          e.appendChild(c)
        }
      })(e, n)
  })(e, a, t),
    (m = (function (t) {
      for (const e of t) {
        const t = document.createElement("li")
        t.classList.add("ship-item"), (t.innerText = e.name), n.appendChild(t)
      }
      return document.querySelectorAll(".ship-item")
    })(u)),
    (function (t, e, n) {
      t.forEach(t => p(t, e, n))
    })(u, a, []),
    (function (t, e) {
      for (const n of e) n.onclick = e => E(e, t)
    })(u, o),
    (r.onclick = () => location.reload())
})()
