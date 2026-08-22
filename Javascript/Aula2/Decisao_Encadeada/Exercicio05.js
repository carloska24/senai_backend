var prompt = require('prompt-sync')();

// Entrada de dados: solicita o salário do funcionário
let salario = Number(prompt("Digite o salário do funcionário (R$): "));

// Processamento: determina a alíquota do Imposto de Renda pela faixa salarial
let aliquota = 0;

if (salario <= 2000) {
    aliquota = 0;
} else if (salario <= 3500) {
    aliquota = 10;
} else if (salario <= 5000) {
    aliquota = 15;
} else {
    aliquota = 20;
}

// Cálculos do imposto e salário líquido
let valorImposto = (salario * aliquota) / 100;
let salarioLiquido = salario - valorImposto;

// Saída de dados
console.log("Salário informado (R$): " + salario.toFixed(2));
console.log("Alíquota de imposto: " + aliquota + "%");
console.log("Valor do imposto retido (R$): " + valorImposto.toFixed(2));
console.log("Salário líquido após o desconto (R$): " + salarioLiquido.toFixed(2));
