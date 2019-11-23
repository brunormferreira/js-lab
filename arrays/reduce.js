const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// [0, 1, 2, 3, 4].reduce(function(Acumulador, valorAtual, indice, array) {
//   return Acumulador + valorAtual;
// });
// 10

// friends - um array de objetos 
// onde o campo "books" é a lista de livros favoritos 
let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - lista que contém todos os livros de friends +
// lista adicional contida em valorInicial
let allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);
console.log(allbooks);


// new array with only names base on other array of objects
let students = [
  { name:'João', age: 10 },
  { name:'José', age: 20 },
  { name:'Marcos', age: 30 }
];

let names = students.reduce((arrayNames, student) => {
  arrayNames.push(student.name);
  return arrayNames;
}, ['Bruno']);
console.log(names); // ['joão', 'josé', 'marcos']