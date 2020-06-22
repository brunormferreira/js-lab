const composition = (...fns) => {
  // currying (lazy eval.)
  return function(value) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, value)
  }
}

const scream = (text) => {
  return text.toUpperCase()
}

const emphasize = (text) => {
  return `${text}!!!!!!`
}

const separe = (text) => {
  return text.split('').join(' ')
}

const result = composition(
  scream,
  emphasize,
  separe,
)('HEEEYYYY')

const result2 = composition(
  scream,
  emphasize,
)

console.log(result)
console.log(result2('REUSABLE'))
