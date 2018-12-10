// done af

const input = require('./inputs/1')

let array = input.split('\n')

let output = 0

const allFreq = {}

while (true) {
  for (item of array) {
    output += Number(item)

    if (allFreq[output]) {
      console.log(output)
      process.exit()
    } else {
      allFreq[output] = true
    }
  }
}
