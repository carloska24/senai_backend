var prompt = require('prompt-sync')();

let numeros = [];

// Entrada de dados: armazena 10 números no vetor
console.log("Digite 10 números inteiros:");
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));
    numeros.push(num);
}

// Processamento: inicializa o maior e o menor com o primeiro elemento
let maiorValor = numeros[0];
let menorValor = numeros[0];

// Percorre o vetor comparando para encontrar os extremos
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
    if (numeros[i] < menorValor) {
        menorValor = numeros[i];
    }
}

// Saída de dados
console.log("\nVetor informado: [" + numeros.join(", ") + "]");
console.log("Maior valor encontrado: " + maiorValor);
console.log("Menor valor encontrado: " + menorValor);
