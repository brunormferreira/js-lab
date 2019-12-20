/* The Selection sort algorithm is based on the idea of finding the minimum or maximum element 
in an unsorted array and then putting it in its correct position in a sorted array. */

let testingList = [15, 5, 12, 9, 13, 18, 1, 14, 2, 11, 6, 4, 17, 3, 8, 10, 7, 16]

const findSmallest = (arr) => {
  const length = arr.length;
  let smallest = arr[0]
  let smallestIndex = 0

  for (let i = 0; i < length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex
}

const selectionSort = (arr) => {
  const length = arr.length;
  let newArr = []

  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr)
    newArr.push(arr[smallest])
    arr.splice(smallest, 1)
  }
  return newArr
}

console.log(selectionSort(testingList))