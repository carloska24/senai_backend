var prompt = require('prompt-sync')();

let numeros = [];
let qtdPares = 0;
let qtdImpares = 0;

// Entrada de dados: lê 10 números e já contabiliza pares e ímpares
console.log("Digite 10 números inteiros:");
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Digite o número " + (i + 1) + ": "));
    numeros.push(num);

    if (num % 2 === 0) {
        qtdPares++;
    } else {
        qtdImpares++;
    }
}

// Saída de dados
console.log("\nNúmeros inseridos: [" + numeros.join(", ") + "]");
console.log("Total de números pares: " + qtdPares);
console.log("Total de números ímpares: " + qtdImpares);
