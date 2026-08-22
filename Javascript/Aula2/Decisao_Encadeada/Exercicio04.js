var prompt = require('prompt-sync')();

// Entrada de dados: solicita o valor total da compra
let valorCompra = Number(prompt("Digite o valor da compra (R$): "));

// Processamento: determina a porcentagem de desconto com base na faixa de valor
let percentualDesconto = 0;

if (valorCompra > 500) {
    percentualDesconto = 20;
} else if (valorCompra > 200) {
    percentualDesconto = 10;
} else if (valorCompra > 100) {
    percentualDesconto = 5;
} else {
    percentualDesconto = 0;
}

// Cálculos do desconto e do valor a pagar
let valorDesconto = (valorCompra * percentualDesconto) / 100;
let valorFinal = valorCompra - valorDesconto;

// Saída de dados
console.log("Percentual de desconto (%): " + percentualDesconto + "%");
console.log("Valor do desconto (R$): " + valorDesconto.toFixed(2));
console.log("Valor final com desconto (R$): " + valorFinal.toFixed(2));
