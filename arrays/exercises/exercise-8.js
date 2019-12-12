// Exercício 8 - Calculadora humana
// Crie uma função calculaAreaTotal que recebe um parâmetro:

// dimensoes: objeto que possui as propriedades altura e comprimento que são números inteiros
// A função deve retornar a soma de todas as áreas. Tome como base a entrada a seguir:

// Exemplo: calculaAreaTotal(dimensoes) → 2709

let dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]

function calcFullArea(dimensions) {
  return dimensions
    .map(item => item.altura * item.comprimento)
    .reduce((accumulator, currentValue) => result = accumulator + currentValue)
}

console.log(calcFullArea(dimensoes))