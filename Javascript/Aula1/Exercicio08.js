var prompt = require('prompt-sync')();

// Entrada de dados: solicita a temperatura em graus Celsius
let grausCelsius = Number(prompt("Digite a temperatura em graus celsius: "));

// Processamento: converte a temperatura de Celsius para Fahrenheit
let fahrenheit = grausCelsius * (9 / 5) + 32;

// Saída de dados: exibe a temperatura em Fahrenheit
console.log("A temperatura em Fahrenheit é: " + fahrenheit);
