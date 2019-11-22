let students = [
  {name: 'Bruno', age: 23},
  {name: 'Igor', age: 18},
  {name: 'Juca', age: 17},
  {name: 'Joao', age: 22},
]

let filteredStudents = students.filter((student) => {
  return student.age >= 18;
})

console.log(filteredStudents);