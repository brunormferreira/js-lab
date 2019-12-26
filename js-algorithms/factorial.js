const factorial = (param) => {
  if (param === 1) 
    return 1
  else 
    return param * factorial(param - 1)
}

console.log(factorial(3))