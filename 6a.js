// hard

const input = require('./inputs/6').split('\n')

const grid = []

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(',')
  input[i][0] = Number(input[i][0])
  input[i][1] = Number(input[i][1])
}

console.log(input)
