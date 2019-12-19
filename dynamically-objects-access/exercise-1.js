const faculty = [
  [ 'Gramatic', '9:00', 'Sueli' ],
  [ 'Math', '10:15', 'Amilton'],
  [ 'Develop', '11:30', 'Bruno' ]
];

function showGradeTeachers(faculty) {
  return faculty.forEach( ([matery, hour, name]) => {
    console.log(`${matery}'s lesson at ${hour} with teacher's ${name}`);
  });
}

console.log(showGradeTeachers(faculty))