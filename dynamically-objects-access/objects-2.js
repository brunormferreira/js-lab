let arr = ['a', 1, 'etc'];
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
};

let obj = { '0': 'Ada', '1': 'Bruno' };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

// let collection = {
//   items: [],
//   add(item) {
//     this.items.push(item);
//   },
//   get(index) {
//     return this.items[index];
//   },
// };
// collection.add(15);
// collection.add(3);
// collection.get(0); // => 15

let city = 'sheffield_';
let a = {
  [city + 'population']: 350000
};

a[city + 'county' ] = 'South Yorkshire';
console.log(a); // {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }

let funarray = [5, 10, 15];
let coolobject = {
  funarray,
  [funarray]: 'the value held in "5,10,15"',
  [funarray.length]: 'object key is 3',
  [{}]: 'empty object'
};
 
console.log(coolobject);
// Object { 3: "object key is 3", funarray: Array[3], 5,10,15: "the value held in "5,10,15"", 
// [object Object]: "empty object" }
 
console.log(coolobject.funarray); // Array [ 5, 10, 15 ]  
console.log(coolobject['funarray']); // Array [ 5, 10, 15 ]  
console.log(coolobject[funarray]); // the value held in "5,10,15"  
console.log(coolobject[funarray.length]); // object key is 3  
console.log(coolobject['[object Object]']); // empty object  
console.log(coolobject[coolobject]); // empty object  
