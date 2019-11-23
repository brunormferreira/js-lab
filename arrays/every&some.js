// every method
// return a boolean value | validate if all elements of an array respect the condition

// tests whether all elements in the array are larger than 10.
console.log('every() method: ' + [12, 5, 8, 130, 44].every(elem => elem >= 10)); // false
console.log('every() method: ' + [12, 54, 18, 130, 44].every(elem => elem >= 10)); // true

// some method
// tests whether any of the elements in the array pass the test implemented by the assigned function.
console.log('some() method: ' + [2, 5, 8, 1, 4].some(elem => elem > 10));  // false
console.log('some() method: ' + [12, 5, 8, 1, 4].some(elem => elem > 10)); // true