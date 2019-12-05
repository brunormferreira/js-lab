// Exercício 5 - Sem duplicações
// Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.

// Utilize as funções auxiliares: reduce e find.

// Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

console.log(removeDuplicate([1,2,3,3,4,5]))

function removeDuplicate(duplicate) {
  return duplicate.reduce((accumulator, currentValue) => {
    let findDuplicata = accumulator.find(value => {
      return currentValue === value 
    });
    if(!findDuplicata) {
      accumulator.push(currentValue)
   }
   return accumulator;
  }, [])
}