;(() => {
  const t = document.getElementById("table"),
    e = document.getElementById("coord-nums"),
    n = document.getElementById("ships-list"),
    o = document.getElementById("restart-button"),
    c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    a = [],
    s = [],
    r = [],
    l = [
      { name: "Carrier", size: 5, location: [] },
      { name: "Battleship", size: 4, location: [] },
      { name: "Cruiser", size: 3, location: [] },
      { name: "Submarine", size: 3, location: [] },
      { name: "Destroyer", size: 2, location: [] },
    ]
  let d,
    m,
    u,
    h,
    f,
    p,
    g = 0
  function E(t) {
    const e = []
    for (let n = 1; n < 11; n++) {
      const o = document.createElement("td")
      o.classList.add("coord"), (o.id = `${t}${n}`), e.push(o)
    }
    return e
  }
  function y(t, e) {
    const n = Math.floor(2 * Math.random())
    0 === n
      ? (function (t, e) {
          const n = e[Math.floor(10 * Math.random())],
            o = Math.floor(Math.random() * (10 - t.size)) + 1
          for (i = 0; i < t.size; i++) t.location.push(n + (o + i))
        })(t, e)
      : 1 === n &&
        (function (t, e) {
          const n = Math.floor(10 * Math.random()) + 1,
            o = Math.floor(Math.random() * (10 - t.size))
          for (i = 0; i < t.size; i++) t.location.push(e[o + i] + n)
        })(t, e),
      (function (t, e) {
        t.location.forEach(n => {
          r.includes(n) && ((t.location = []), y(t, e))
        }),
          t.location.forEach(t => r.push(t))
      })(t, e)
  }
  function T(t) {
    const e = t.currentTarget.id
    ;(u = document.getElementById(e)),
      (h = document.getElementById("coord-log")),
      (f = document.getElementById("message")),
      (p = document.getElementById("game-over")),
      s.length === l.length
        ? removeEventListener("click", T)
        : (function (t, e) {
            for (const n of e) if (t === n) return !0
            return !1
          })(e, a)
        ? ((f.innerText =
            "You have already shot this coordinate. Please select another coordinate!"),
          (h.innerText = `Coordinate: ${e}`))
        : ((function (t) {
            for (const e of l)
              for (const n of e.location) if (t === n) return !0
            return !1
          })(e)
            ? (u.classList.add("hit"), (f.innerText = "You hit a ship!"))
            : (u.classList.add("miss"), (f.innerText = "Missed!")),
          (h.innerText = `Coordinate: ${e}`),
          g++,
          a.push(e),
          (function (t, e, n) {
            for (const o of t) {
              const t = []
              for (const n of o.location)
                for (const o of e) n === o && t.push(n)
              t.length !== o.size ||
                s.includes(o.name) ||
                (s.push(o.name),
                m.forEach(t => {
                  o.name == t.innerText && t.classList.add("sunk-ship")
                }),
                (n.innerText = `You sunk the ${o.name}.`))
            }
          })(l, a, f),
          s.length === l.length &&
            (p.innerText = `You have completed the game. It took you ${g} shots. Restart the game to play again.`))
  }
  !(function () {
    for (let t = 1; t < 11; t++) {
      const n = document.createElement("th")
      n.classList.add("th"), (n.innerText = t), e.appendChild(n)
    }
  })(),
    (function () {
      for (let e = 0; e < 10; e++) {
        const n = c[e],
          o = document.createElement("tr")
        o.id = n
        const i = document.createElement("th")
        i.classList.add("th"), (i.innerText = n), o.appendChild(i)
        const a = E(n)
        for (const t of a) o.appendChild(t)
        t.appendChild(o)
      }
    })(),
    (d = document.getElementsByClassName("coord")),
    (function (t) {
      for (const e of t) {
        const t = document.createElement("li")
        t.classList.add("ship-item"), (t.innerText = e.name), n.appendChild(t)
      }
      m = document.querySelectorAll(".ship-item")
    })(l),
    (function (t) {
      t.forEach(t => y(t, c))
    })(l),
    (function () {
      for (const t of d) t.onclick = T
    })(),
    (o.onclick = () => location.reload())
})()
