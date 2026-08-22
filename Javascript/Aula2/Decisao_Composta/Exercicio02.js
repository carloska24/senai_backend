var prompt = require('prompt-sync')();

// Entrada de dados: valor da compra e status VIP
let valorCompra = Number(prompt("Digite o valor da compra (R$): "));
let clienteVIP = prompt("Cliente é VIP? (Sim/Não): ");

// Processamento: verifica se é VIP
let isVIP = (clienteVIP.toLowerCase() === "sim");

// Processamento / Decisão: desconto é concedido se compra > 200 OU cliente for VIP
let recebeDesconto = (valorCompra > 200 || isVIP);

// Saída de dados
if (recebeDesconto) {
    console.log("Cliente recebe desconto");
} else {
    console.log("Cliente não recebe desconto");
}
