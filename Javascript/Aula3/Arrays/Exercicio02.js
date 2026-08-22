var prompt = require('prompt-sync')();

let numeros = [];
let somaTotal = 0;

// Entrada de dados: armazena 8 números inteiros no vetor e acumula a soma
console.log("Digite 8 números inteiros:");
for (let i = 0; i < 8; i++) {
    let num = Number(prompt("Digite o número " + (i + 1) + ": "));
    numeros.push(num);
    somaTotal += num;
}

// Saída de dados
console.log("\nElementos do vetor: [" + numeros.join(", ") + "]");
console.log("Soma total dos 8 elementos: " + somaTotal);
