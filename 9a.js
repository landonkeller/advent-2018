// v close but no cigar

const numPlayers = 491
const numMarbles = 71058

const circle = [0, 2, 1]
let currentIdx = 1
const scores = []

const removeMarble = (idx, i) => {
  let player = i % numPlayers

  if (idx < 7) {
    idx = circle.length - (7 - idx)
    currentIdx = idx - 7
  }

  if (scores[player]) scores[player] += i + circle[idx - 7]
  else scores[player] = i + circle[idx - 7]

  circle.splice(idx - 7, 1)
  currentIdx = idx - 7
}

const addMarble = (where, what) => {
  circle.splice(where, 0, what)
  currentIdx = where
}

for (let i = 3; i < numMarbles; i++) {
  if (i && i % 23 === 0) removeMarble(currentIdx, i)
  else {
    if (currentIdx === circle.length - 2) {
      circle.push(i)
      currentIdx = circle.length - 1
    } else if (currentIdx === circle.length - 1) {
      addMarble(1, i)
    } else {
      addMarble(currentIdx + 2, i)
    }
  }
}

console.log(
  scores.sort((a, b) => {
    return b - a
  })
)

// console.log(scores)
