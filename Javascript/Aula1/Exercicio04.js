var prompt = require('prompt-sync')();

// Entrada de dados: solicita um número para calcular o dobro
let numero = Number(prompt("Digite o número! Vamos calcular o dobro desse número: "));

// Processamento: calcula o dobro do número digitado
let dobro = numero * 2;

// Saída de dados: exibe o resultado
console.log("O dobro do número digitado é: " + dobro);
