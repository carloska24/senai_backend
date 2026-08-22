var prompt = require('prompt-sync')();

// Entrada de dados: solicita a idade do usuário
let idade = Number(prompt("Digite sua idade: "));

// Processamento: calcula os dias de vida aproximados
let calculaIdade = idade * 365;

// Saída de dados: exibe a quantidade total de dias
console.log("Você tem " + calculaIdade + " dias de vida!");
