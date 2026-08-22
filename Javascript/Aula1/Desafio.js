var prompt = require('prompt-sync')();

// Entrada de dados: dados do produto
let produto = prompt("Digite o nome do produto: ");
let quantidade = Number(prompt("Digite a quantidade: "));
let preco = Number(prompt("Digite o valor do produto: "));

// Processamento: calcula o valor total da compra
let totalCompra = preco * quantidade;
console.log("O total da compra é: " + totalCompra);

// Entrada de dados: valor pago pelo cliente
let valorPago = Number(prompt("Digite o valor pago: "));

// Processamento: calcula o troco
let troco = valorPago - totalCompra;

// Saída de dados: exibe valor pago e o troco
console.log("O valor pago foi: " + valorPago);
console.log("O troco é: " + troco);
