var prompt = require('prompt-sync')();

let contador = 1;
let somaPares = 0;
let somaImpares = 0;

// Laço ENQUANTO: percorre de 1 até 100 separando e somando pares e ímpares
while (contador <= 100) {
    if (contador % 2 === 0) {
        // Número par
        somaPares += contador;
    } else {
        // Número ímpar
        somaImpares += contador;
    }
    contador++;
}

// Saída de dados: exibindo os dois somatórios
console.log("--- Somatório de 1 a 100 ---");
console.log("Soma de todos os números pares entre 1 e 100: " + somaPares);
console.log("Soma de todos os números ímpares entre 1 e 100: " + somaImpares);
