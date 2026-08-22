var prompt = require('prompt-sync')();

// Entrada de dados: solicita o número para gerar a tabuada
let numero = Number(prompt("Digite um número para ver a sua tabuada: "));

// Processamento e Saída: laço PARA de 1 até 10 calculando cada multiplicação
console.log("\n--- Tabuada do " + numero + " ---");
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
