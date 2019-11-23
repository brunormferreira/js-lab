const arr = [5, 12, 8, 130, 44];

// always return the first element true
const found = arr.find(element => element > 10);
console.log(found); // 12

const inventory = [
  { name: 'maças', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cerejas', quantity: 5 }
];

const result = inventory.find( fruit => fruit.name === 'cerejas' );
console.log(result) // { name: 'cerejas', quantity: 5 }