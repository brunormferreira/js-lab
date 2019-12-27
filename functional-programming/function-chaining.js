let meetups = [
  { name: 'JavaScript', isActive: true, members: 700 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
]

let sumFPChain = meetups.filter(m => m.isActive)
                        .map(m => m.members - (0.1 * m.members))
                        .reduce((acc, m) => acc + m)

console.log(sumFPChain)

/* In the above code snippet, we want to print total members of all active meetups,
considering 10% members might be duplicate */