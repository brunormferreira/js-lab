// // Exercício 4 - Equilibrio de parênteses
// // Utilizando a função auxiliar reduce, escreva uma função chamada validaparenthesess que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

// // Exemplo: validaParenteses(')((()()())))'); → false
// // Exemplo: "()()()" → true
// // Exemplo: ")(" → false

console.log(validParentheses(')((()()())))'))
console.log(validParentheses('()()()'))
console.log(validParentheses(')('))

function validParentheses(parentheses) {
  let arrayParentheses = parentheses.split('');
  let balanced = !arrayParentheses.reduce((sum, parentheses) => {
    if(sum < 0) { return sum } // para o caso de começar com ")"
    if(parentheses ===  "(") { return ++sum }
    if(parentheses ===  ")") { return --sum }
  }, 0);
  return balanced;
}

// let number = 0
// console.log(--number)
// console.log(number--) 

// a++ is known as postfix.
// add 1 to a, returns the old value.

// ++a is known as prefix.
// add 1 to a, returns the new value.