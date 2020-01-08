// Key/Value looping (if you use for loops)
const thing = {
  a: 1,
  b: 2,
  c: 3,
};

for(let [key, value] of Object.entries(thing)) {
 console.log(key, value);
}

// Operations on the parameter list
const itemAt = (array, index, value = array[index]) => value;

itemAt(['a', 'b', 'c', 1]); // 'b'

