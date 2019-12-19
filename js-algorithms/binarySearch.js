const binarySearch = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    mid = (low + high)
    guess = list[mid]
    if (guess === item) return mid
    guess > item
      ? high = mid - 1
      : low = mid + 1
  }
}

const myList = [1, 3, 5, 7, 9]
const myBigList =  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51];

console.log(binarySearch(myList, 9))
console.log(binarySearch(myBigList, 25))