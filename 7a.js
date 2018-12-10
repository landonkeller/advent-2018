const input = require('./inputs/7').split('\n')

const obj = {}

const done = []

for (let i = 0; i < input.length; i++) {
  let first = input[i].split('Step ')[1].split(' must')[0]
  let second = input[i].split(' can')[0].split('step ')[1]
  if (!obj[first]) {
    obj[first] = [second]
  } else if (!obj[first].includes(second)) {
    obj[first].push(second)
  }
}
const steps = Object.keys(obj)

let i = 0

while (i < steps.length) {
  let key = steps[i]
  let values = obj[key]

  for (j = 0; j < values.length; j++) {
    if (values.length === 1) {
      done.push(values[0])
      steps.splice(i, 1)
      break
    } else {
      if (!done.includes(values[j])) {
        break
      }
    }
  }
  done.push(key)
  steps.splice(i, 1)
  if (steps.length === 0) break
  if (i >= steps.length) i = 0
  else i++
}
