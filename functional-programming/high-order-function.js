function greaterThan(n) {
  return x => x > n;
}
let greaterThanTwo = greaterThan(2);

console.log(greaterThanTwo(5));

/* A higher-order function is a function that gets a function as an argument. 
It may or may not return a function as its resulting output. */

let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
  grades.filter(isBoy)
)

let getGirls = grades => (
  grades.filter(isGirl)
)

let average = grades => (
  grades.reduce((acc, curr) => (
      acc + curr.grade
  ), 0) / grades.length
)

let maxGrade = grades => (
  Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
  Math.min(...grades.map(student => student.grade))
)

let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9