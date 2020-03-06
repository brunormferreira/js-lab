const birds = {
  owl: '🦉',
  eagle: '🦅',
  duck: '🦆'
};

const entries = Object.entries(birds);
console.log(entries);

// [['owl', '🦉'], ['eagle', '🦅'], ['duck', '🦆']]

/* ----------------------------------------------------------------------------- */

// using `for...of` loop
for (const [key, value] of Object.entries(birds)) {
  console.log(`${key}: ${value}`);
}

// owl: 🦉
// eagle: 🦅
// duck: 🦆

/* ----------------------------------------------------------------------------- */

// using array destructuring
Object.entries(birds).forEach(([key, value]) => console.log(`${key}: ${value}`));

// owl: 🦉
// eagle: 🦅
// duck: 

/* ----------------------------------------------------------------------------- */

// Converting an Object to a Map 
const map = new Map(Object.entries(birds));

console.log(map.size); // 3
console.log(map.has('owl')); // true
console.log(map.get('duck')); // 🦆

/* ----------------------------------------------------------------------------- */

const foods = {
  cake: '🍰',
  pizza: '🍕',
  candy: '🍬',
  icecream: '🍨'
};

const values = Object.values(foods);
console.log(values);

// ['🍰', '🍕', '🍬', '🍨']

/* ----------------------------------------------------------------------------- */

/* Both Object.values() and Object.entries() do not follow the prototype chain and 
only iterate through the properties that are directly added to the given object. 
They also ignore all non-enumerable properties as well: */

Object.defineProperty(foods, 'sushi', {
  value: '🍣',
  writable: true,
  configurable: true,
  enumerable: false
});

console.log(Object.values(foods));

// ['🍰', '🍕', '🍬', '🍨']

/* ----------------------------------------------------------------------------- */

// Converting an Object to a Set
const set = new Set(Object.values(foods));

console.log(set.size); // 4
console.log(set.has('🍨')); // true

/* ----------------------------------------------------------------------------- */

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }