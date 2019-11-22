let arr = [1, 2, 3];

let mappedArr = arr.map((number) => {
  return number * 2;
}).filter((number) => {
  return number >= 4;
});

console.log(mappedArr);