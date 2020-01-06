function greaterThan(n) {
  return x => x > n;
}
let greaterThanTwo = greaterThan(2);

console.log(greaterThanTwo(5));

/* A higher-order function is a function that gets a function as an argument. 
It may or may not return a function as its resulting output. */