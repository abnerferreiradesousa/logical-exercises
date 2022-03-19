// EXERCÍCIO 1
// Faça as 4 operações básica con base nos números 2 e 4:
// Ao final de cada operação imprina na tela no seguinte fornato:

// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2/4 = x
// Multiplicação: 2 * 4 = x
// --

let num1 = 2;
let num2 = 4;
let arr = ['+', '-', '*', '/']

function sum(num1, num2) {
  console.log({
    soma: num1 + num2,
    subt: num1 - num2,
    multi: num1 * num2,
    divisao: num1 / num2,
  });
}

sum(5, 8)
// console.log('Soma: 2 + 4 = ' + (num1 + num2));
// console.log('Soma: 2 - 4 = ' + (num1 - num2));
// console.log('Soma: 2 / 4 = ' + (num1 / num2));
// console.log('Soma: 2 * 4 = ' + (num1 * num2));