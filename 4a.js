// lmao not gonna happen

const input = require('./inputs/4')
  .split('\n')
  .sort()
const guards = {}

for (let i = 0; i < input.length; i++) {
  const temp = {}
  temp.minute = input[i].split(']')[0].split(':')[1]

  if (input[i].split('#').length > 1) {
    temp.id = input[i].split('#')[1].split(' begins shift')[0]
  } else {
    temp.action = input[i].split('] ')[1] === 'falls asleep' ? 0 : 1
  }
  input[i] = temp
}

for (let i = 0; i < input.length; i++) {
  if (input[i].id) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[j].action === 0 || input[j].action === 1)
        input[j].id = input[i].id
      else if (input[j].id) {
        break
      }
    }
  }
}

for (let i = 0; i < input.length; i++) {
  if (input[i].action !== 0 && input[i].action !== 1) {
    input.splice(i, 1)
  }
  if (
    input[i].action === 0 &&
    input[i + 1].action === 1 &&
    input[i].id === input[i + 1].id
  ) {
    for (
      let j = Number(input[i].minute);
      j < Number(input[i + 1].minute);
      j++
    ) {
      if (!guards[input[i].id]) {
        guards[input[i].id] = {}
      } else if (!guards[input[i].id][j]) {
        guards[input[i].id][j] = 1
      } else {
        guards[input[i].id][j]++
      }
    }
  }
}
// 2879 49
const gKeys = Object.keys(guards)

const outArr = []

let maxMin = 0
let maxNum = 0

let guardId = 0

for (let i = 0; i < gKeys.length; i++) {
  const minutes = Object.values(guards[gKeys[i]])
  const mKeys = Object.keys(guards[gKeys[i]])

  const max = minutes.slice().sort((a, b) => {
    return b - a
  })[0]

  console.log(mKeys[minutes.indexOf(max)], Number(gKeys[i]))

  // if (max > maxNum) {
  //   maxNum = max
  //   maxMin = mKeys[idx]
  //   guardId = Number(gKeys[i])
  // }
}
// console.log(maxMin, guardId)
