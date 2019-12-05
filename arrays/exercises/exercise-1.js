// Exercício 1 - Par ou ímpar?
// Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.
// for(var i = 0; i<= numeros.length; i++) {
  //     if(i % 2 === 0) {
    //         console.log(i + ' é par');
    //     } else {
      //         console.log(i + ' é ímpar');
      //     }
      // }
      
      // saída:
      // 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar

let numeros = [0, 1, 2, 3, 4, 5];
const evenOdd = numeros.forEach(number => {
  number % 2 === 0
  ? console.log(number + ' é par')
  : console.log(number + ' é ímpar')
});
