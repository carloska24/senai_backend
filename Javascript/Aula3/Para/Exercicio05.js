var prompt = require('prompt-sync')();

// Entrada de dados: solicita o início e fim da sequência
let inicio = Number(prompt("Digite o número de início: "));
let fim = Number(prompt("Digite o número de fim: "));

console.log("\nSequência de " + inicio + " até " + fim + ":");

// Processamento: verifica se a sequência é crescente ou decrescente
if (inicio <= fim) {
    // Laço crescente
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
} else {
    // Laço decrescente
    for (let i = inicio; i >= fim; i--) {
        console.log(i);
    }
}
