// done af

const input = require('./inputs/2').split('\n')

let num2 = 0
let num3 = 0

const countNumber = string => {
  const arr = string.split('')
  let obj = {}
  for (letter of string) {
    if (obj[letter]) {
      obj[letter]++
    } else {
      obj[letter] = 1
    }
  }
  if (Object.values(obj).indexOf(2) > -1) {
    num2++
  }
  if (Object.values(obj).indexOf(3) > -1) {
    num3++
  }
}

// countNumber(input[input.length - 2])

for (string of input) {
  countNumber(string)
}

console.log(num2 * num3)
