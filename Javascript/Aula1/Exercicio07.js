var prompt = require('prompt-sync')();

// Entrada de dados: solicita um número ao usuário
let numero = Number(prompt("Digite o número: "));

// Processamento: calcula o antecessor subtraindo 1
let antecessor = numero - 1;

// Saída de dados: exibe o valor do antecessor
console.log("O antecessor é: " + antecessor);
