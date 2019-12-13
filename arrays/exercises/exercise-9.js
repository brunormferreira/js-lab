// Exercício 11 - A pequena ovelha Dolly
// Utilizando o método auxiliar forEach, crie uma função clonaObjeto que 
// recebe como parâmetro um objeto e cria uma cópia exata dela.

// utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto

function cloneObject(target) {
  let properties = Object.getOwnPropertyNames(target)
  let copy = {}
  properties.forEach(property => copy[property] = target[property])
  return copy;
}


console.log(cloneObject({name: 'Bruno', age: 23}))