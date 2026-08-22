var prompt = require('prompt-sync')();

let totalAcumulado = 0;
let desejaContinuar = "S";

// Laço ENQUANTO: continua acumulando enquanto o usuário responder 'S' ou 's'
while (desejaContinuar.toUpperCase() === "S") {
    console.log("\nValor total acumulado até o momento: " + totalAcumulado);
    
    let numeroInserido = Number(prompt("Digite um número para somar ao total: "));
    totalAcumulado += numeroInserido;
    
    desejaContinuar = prompt("Deseja continuar somando? (S/N): ");
}

// Saída final após encerrar a repetição
console.log("\nProcesso finalizado. Valor total acumulado final: " + totalAcumulado);
