var prompt = require('prompt-sync')();

let numeros = [];

// Entrada de dados: preenche o vetor com 10 números inteiros
console.log("Digite 10 números inteiros:");
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));
    numeros.push(num);
}

// Saída de dados: exibe os elementos percorrendo o array do último para o primeiro
console.log("\nNúmeros na ordem inversa:");
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}
