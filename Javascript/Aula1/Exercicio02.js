var prompt = require('prompt-sync')();

// Entrada de dados: lê os dois números informados pelo usuário
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Processamento: calcula a soma entre eles
let total = numero1 + numero2;

// Saída de dados: exibe o resultado final da soma
console.log("A soma dos dois números é: " + total);
