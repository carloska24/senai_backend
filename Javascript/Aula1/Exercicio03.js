var prompt = require('prompt-sync')();

// Entrada de dados: solicita as duas notas
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

// Processamento: calcula a média aritmética das notas
let media = (nota1 + nota2) / 2;

// Saída de dados: exibe a média calculada
console.log("A média entre as duas notas é: " + media);
