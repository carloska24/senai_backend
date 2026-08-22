var prompt = require('prompt-sync')();

let totalAcumulado = 0;
let desejaContinuar;

// Estrutura FAÇA-ENQUANTO (do-while): lê o valor e acumula antes de verificar se continua
do {
    console.log("\nValor total acumulado até o momento: " + totalAcumulado);
    
    let numeroInserido = Number(prompt("Digite um número para somar ao total: "));
    totalAcumulado += numeroInserido;
    
    desejaContinuar = prompt("Deseja continuar somando? (S/N): ");
} while (desejaContinuar.toUpperCase() === "S");

// Saída final após encerrar
console.log("\nProcesso finalizado. Valor total acumulado final: " + totalAcumulado);
