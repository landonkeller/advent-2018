// done af

const input = require('./inputs/3').split('\n')

for (let i = 0; i < input.length; i++) {
  const temp = {}
  temp.id = input[i].split(' @')[0].substr(1)
  temp.x1 = Number(input[i].split(',')[0].split('@ ')[1])
  temp.x2 = Number(temp.x1) + Number(input[i].split('x')[0].split(': ')[1])
  temp.y1 = Number(input[i].split(',')[1].split(': ')[0])
  temp.y2 = Number(temp.y1) + Number(input[i].split('x')[1])

  input[i] = temp
}

let total = 0
let square = []

for (i = 0; i < input.length; i++) {
  for (x = input[i].x1; x < input[i].x2; x++) {
    const yArr = []
    for (y = input[i].y1; y < input[i].y2; y++) {
      if (!square[x]) {
        square[x] = []
        square[x][y] = 1
      } else if (square[x] && !square[x][y]) {
        square[x][y] = 1
      } else if (square[x][y]) {
        square[x][y]++
      }
    }
  }
}

for (x of square) {
  for (y of x) {
    if (y > 1) total++
  }
}

for (i = 0; i < input.length; i++) {
  let width = 0
  let height = 0
  for (x = input[i].x1; x < input[i].x2; x++) {
    width = x - input[i].x1 + 1
    for (y = input[i].y1; y < input[i].y2; y++) {
      if (square[x][y] > 1) {
        width = 0
        height = 0
        break
      } else {
        height++
      }
    }
  }
  if (
    width === input[i].x2 - input[i].x1 &&
    height / (input[i].x2 - input[i].x1) === input[i].y2 - input[i].y1
  ) {
    console.log(input[i].id)
  }
}

console.log(total)
