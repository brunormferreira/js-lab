// Exercício 3 - NÃO ESTOU BRAVO
// Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

// Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']


caps(['oi', 'tudo', 'bem?'])

function caps(words) {
  return words.forEach(word => console.log(word.toUpperCase()))
}