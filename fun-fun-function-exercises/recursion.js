// let countDownFrom = (num) => {
//   if (num === 0) return
//   console.log(num)
//   countDownFrom(num - 1)
// }

// countDownFrom(10)

// Should output
// 10
// 9
// 8
// ...
// 1

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
];

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(categories, c.id))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
)

/*
  {
    animals: {
      mammals: {
        cats: {
          persian: null
          siamese: null
        },
        dogs: {
          chihuahua: null
          labrador: null
        }
      }
    }
  } 
*/