var prompt = require('prompt-sync')();

let numero1, numero2, soma;

console.log('Digite dois números para somar:');

numero1 = Number(prompt('Digite o primeiro número: '));

numero2 = Number(prompt('Digite o segundo número: '));

soma = numero1 + numero2;

console.log('A soma de ' + numero1 + ' e ' + numero2 + ' é: ' + soma);