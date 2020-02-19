// let triple = function(x) {
//   return x * 3
// }

// let waffle = triple
// waffle(30)

let animals = [
  { name: 'Fluffykins', species: 'rabbity' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

let isDog = (animal) => animal.species === 'dog'
let isOtherAnimals = (animal) => animal.species !== 'dog'

let dogs = animals.filter(isDog)
let anotherAnimals = animals.filter(isOtherAnimals)

console.log(dogs)
console.log(anotherAnimals)

// let dogs = []
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].species === 'dog')
//     dogs.push(animals[i])
// }

/* 
High Order Components

1: Composition 

**Functions are values**

*/