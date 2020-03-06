const obj = {
  name: 'bruno',
  age: 23,
  address: null,
  cpf: null
}

/*

to return: 

{
  name: 'bruno',
  age: 23,
}

*/

// passando primeiro a validação de negação 
const cleanObj = (obj) => Object.keys(obj).reduce((acc, cur) => (obj[cur] !== null) ? { ...acc, [cur]: obj[cur] } : acc, {})
// passando primeiro a validação de afirmação
const cleanObj = (obj) => Object.keys(obj).reduce((acc, cur) => (obj[cur] === null) ? acc : { ...acc, [cur]: obj[cur] }, {})


const cleanObj2 = (obj) => {
  const objKeys = Object.keys(obj)
  const result = { ...obj }

  objKeys.forEach((key) => {
    if (result[key] === null) delete result[key]
  })

  return result
}


const cleanObj3 = (obj) => {
  const emptyObject = Object.keys(obj)
    .reduce((accumulator, current) => {
      if (obj[current] === null) {
        return accumulator
      }
      
      return {
        ...accumulator,
        [current]: obj[current]
      }
    }, {})

    return emptyObject
}

const cleanObj4 = (obj) => Object.keys(obj)
  .reduce((accumulator, current) => {
    if (obj[current] === null) {
      return accumulator
    }
    
    return {
      ...accumulator,
      [current]: obj[current]
    }
  }, {})







/*
////// bad - hadouuken

if (idade === 18) {
  if (cnh === true) {
    if (mais alguma coisa) {

    }
  }
}


/////// good ANTI-HADOOOUKEN

if (idade !== 18) {
  return
}

if (cnh === false) {
  return
}

// faz algo



*/
