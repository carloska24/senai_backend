var prompt = require('prompt-sync')();

// Entrada de dados: solicita a base e a altura do retângulo
let base = Number(prompt("Digite a base: "));
let altura = Number(prompt("Digite a altura: "));

// Processamento: calcula a área do retângulo (base * altura)
let area = base * altura;

// Saída de dados: exibe a área calculada
console.log("A área do retângulo é: " + area);
