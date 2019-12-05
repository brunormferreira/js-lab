// Exercício 2 - Quero o dobro
// Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.
// Exemplo: dobrar([1,2,3]) → [2,4,6]

console.log(dobrar([1, 2, 3, 4, 5, 6]))

function dobrar(numbers) {
  return numbers.map(number => {
    return number * 2
  })
}

