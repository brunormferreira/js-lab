let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount)

// let totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount
// }

let values = [1, 2, 3, 4]
let reducer = (acc, curr) => acc + curr
console.log(values.reduce(reducer))