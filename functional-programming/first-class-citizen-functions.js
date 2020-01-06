function executeFunctions(x, y) {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  console.log(`sum: ${add(x, y)}`);
  console.log(`difference: ${subtract(x, y)}`);
}

console.log(executeFunctions(8,4))

/* What’s good about Functional Programming is its functions are first-class citizens: you can always insert functions inside a function without any restrictions present. */