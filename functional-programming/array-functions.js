let meetups = [
  { name: 'JS', isActive: true, members: 450 },
  { name: 'Angular', isActive: false, members: 900 },
  { name: 'React', isActive: true, members: 900 }
]

/* Imperative-- focus on describing how program operates */
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
  let m = meetups[i]
  if (m.isActive) {
    activeMeetups.push(m);
  } 
}
console.log(activeMeetups)
/* Output will be array of 2 elements where isActive is true */


/* Declarative-- focus on what the program should accomplish */
let activeMeetupsFP = [];
activeMeetupsFP = meetups.filter(m => m.isActive)
console.log(activeMeetupsFP)