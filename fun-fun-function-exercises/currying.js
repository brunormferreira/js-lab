// let dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + ' dragon that breathes ' +
//   element + '!'
// console.log(dragon('fluffykins', 'tiny', 'lightning'))

let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

// console.log(dragon('fluffykins')('tiny')('lightning'))

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))


