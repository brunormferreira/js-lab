let dogs = [
  { name: 'Archie', breed: 'Lurcher', owner: 'Jack' },
  { name: 'Charlie', breed: 'Pug', owner: 'John' },
  { name: 'Buddy', breed: 'Pug', owner: 'Mike' }
]
// need to return ['John', 'Mike']

// good! But we can do in a better way
function getOwners(dogs) {
  return dogs
    .filter(dog => dog.breed === 'Pug')
    .map(dog => dog.owner);
  }
console.log('Filter and Map way:', getOwners(dogs))

// // amazing way!
const getReduceOwners = (dogs) =>
  dogs.reduce((total, curr) =>
    curr.breed === 'Pug'
      ? [...total, curr.owner]
      : total, [])

console.log('Reduce way: ', getReduceOwners(dogs))

// one line! 
// dogs.reduce((total, current) => current.breed === 'Pug' ? [...total, current.owner] : total, [])

// negative condition first
// dogs.reduce((total, current) => current.breed !== 'Pug' ? total : [...total, current.owner], [])
