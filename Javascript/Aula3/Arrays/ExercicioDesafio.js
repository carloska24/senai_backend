var prompt = require('prompt-sync')();

let numeros = [];

// Entrada de dados: armazena 10 números no vetor
console.log("Digite 10 números para ordenar:");
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));
    numeros.push(num);
}

console.log("\nVetor na ordem original: [" + numeros.join(", ") + "]");

// Processamento: Ordenação crescente utilizando o algoritmo Bubble Sort (Troca)
for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
            let auxiliar = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = auxiliar;
        }
    }
}

// Saída de dados: vetor com elementos ordenados
console.log("Vetor ordenado em ordem crescente: [" + numeros.join(", ") + "]");
