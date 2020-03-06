/* commissionsToReceive: {
    totalValue: 1837.92,
    initialDate: '2020-01-01T17:27:03.029+0000',
    finalDate: '2020-01-09T17:27:03.029+0000',
    totalSoldContracts: 45,
    totalSplitCommissionContracts: 6,
    totalIndicationsContracts: 10,
  }, */

const contracts = [
  {
    commissionValue: 500,
    value: 100,
    contractId: 2225,
    calcAgentId: 672,
    createdAt: '2020-01-01T17:27:03.029+0000',
  },
  {
    commissionValue: 500,
    value: 100,
    contractId: 2225,
    calcAgentId: 672,
    createdAt: '2020-02-01T17:27:03.029+0000',
  },
  {
    commissionValue: 500,
    value: 100,
    contractId: 2225,
    calcAgentId: 672,
    createdAt: '2020-03-01T17:27:03.029+0000',
  },
  {
    commissionValue: 500,
    value: 100,
    contractId: 2225,
    calcAgentId: 672,
    createdAt: '2020-04-01T17:27:03.029+0000',
  },
]

const result = contracts.reduce((acc, curr, index) => {
  const commissionValue = acc.commissionValue + curr.commissionValue
  let initialDate
  let finalDate

  if (!acc.initialDate && !acc.finalDate) {
    initialDate = new Date(curr.createdAt)
    finalDate = new Date(curr.createdAt)
  } else {
    initialDate = new Date(curr.createdAt) < new Date(acc.initialDate) 
      ? new Date(curr.createdAt)
      : new Date(acc.initialDate)

    finalDate = new Date(curr.createdAt) > new Date(acc.finalDate) 
      ? new Date(curr.createdAt)
      : new Date(acc.finalDate)
  }

  const contracts = index + 1

  return {
    commissionValue,
    initialDate,
    finalDate,
    contracts,
  }
}, { commissionValue: 0 })

console.log(result)