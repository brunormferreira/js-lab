const composition = (fn1, fn2, fn3, value) => {
  return fn3(fn2(fn1(value)))
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
  'HEEEYYYY',
)

console.log(result)