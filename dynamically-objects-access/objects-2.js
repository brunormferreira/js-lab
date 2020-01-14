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