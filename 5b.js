// done af

const input = require('./inputs/5').split('')

let removedArr = input.slice()

const loop = input => {
  for (let i = 0; i < input.length; i++) {
    let a = input[i]
    let b = input[i + 1]

    if (a && b && a !== b && (a === b.toLowerCase() || a === b.toUpperCase())) {
      input.splice(i, 2)
      i -= 2
    }
  }
  return input.length
}

for (let n = 0; n < 26; n++) {
  let chr = String.fromCharCode(97 + n)

  let idx = removedArr.includes(chr)
    ? removedArr.indexOf(chr)
    : removedArr.indexOf(chr.toUpperCase())

  while (idx > -1) {
    removedArr.splice(idx, 1)
    idx = removedArr.includes(chr)
      ? removedArr.indexOf(chr)
      : removedArr.indexOf(chr.toUpperCase())
  }
  console.log(chr, loop(removedArr))
  removedArr = input.slice()
}
