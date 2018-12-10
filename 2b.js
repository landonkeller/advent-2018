// done af

const input = require('./inputs/2').split('\n')

const arr = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    const first = input[i].split('')
    const second = input[j].split('')
    let matches = 0
    let unmatchedIdx
    for (l = 0; l < first.length; l++) {
      if (first[l] !== second[l]) {
        matches++
        unmatchedIdx = l
      }
    }
    if (matches === 1) {
      console.log(
        input[i].substr(0, unmatchedIdx) + input[i].substr(unmatchedIdx + 1)
      )
      process.exit()
    }
  }
}
