// done af

const input = require('./inputs/5').split('')

const loop = input => {
  for (let i = 0; i < input.length; i++) {
    let a = input[i]
    let b = input[i + 1]

    if (a && b && a !== b && (a === b.toLowerCase() || a === b.toUpperCase())) {
      input.splice(i, 2)
      i -= 2
    }
  }
  console.log(input.length)
}

loop(input)
