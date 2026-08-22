var prompt = require('prompt-sync')();

// Entrada de dados: solicita o número inicial para a contagem
let numeroInicial = Number(prompt("Digite um número inteiro para iniciar a contagem regressiva: "));
let contador = numeroInicial;

console.log("\nIniciando contagem regressiva:");

// Laço ENQUANTO: decrementa o contador até chegar em 0
while (contador >= 0) {
    console.log(contador);
    contador--;
}

console.log("Contagem regressiva finalizada!");
