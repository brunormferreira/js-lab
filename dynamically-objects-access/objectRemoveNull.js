const obj = {
  name: 'bruno',
  Q: null,
  age: 23,
  W: null,
  happy: true,
  E: null,
}
  
/* solution with NO function and destruct array */
// const showObjPropertyNotNull = Object.entries(obj).reduce((acc, [key, value]) => {
//   if (value) {
//     acc[key] = value;
//   }

//   return acc
// }, {})

// console.log(showObjPropertyNotNull)

// obj[curr] - take all the dynamic values from keys approach in <iteration>

/* solution with function and negative validation first */
// const cleanObj1 = (obj) => Object.keys(obj)
//                                 .reduce((acc, cur) => 
//                                   (obj[cur] !== null) 
//                                     ? { ...acc, [cur]: obj[cur] }
//                                     : acc, {})
// console.log(cleanObj1(obj))

/* solution with function and affirmative validation first */
// Object.keys(obj).reduce((acc, key) => (obj[key] === undefined ? acc : { ...acc, [key]: obj[key] }), {})

// ************************************************************************************************

/* Shortest one liners for ES6+ */
/* All examples with affirmative validation first */

// Filter all falsy values ( "", 0, false, null, undefined )
const teste1 = (obj) => Object.entries(obj).reduce((acc, [key, value]) => (value ? { ...acc, [key]: value } : acc), {})

// Filter null and undefined values:
const teste2 = (obj) =>  Object.entries(obj).reduce((acc, [key, value]) => (value == null ? acc : { ...acc, [key]: value }), {})

// Filter ONLY null
const teste3 = (obj) =>  Object.entries(obj).reduce((acc, [key, value]) => (value === null ? acc : { ...acc, [key]: value }), {})

// Filter ONLY undefined
const teste4 = (obj) =>  Object.entries(obj).reduce((acc, [key, value]) => (value === undefined ? acc : { ...acc, [key]: value }), {})

console.log(teste1(obj))
console.log(teste2(obj))
console.log(teste3(obj))
console.log(teste4(obj))

/* JSON.stringify removes the undefined keys */
// removeUndefined = function(json){
//   return JSON.parse(JSON.stringify(json))
// }