var prompt = require('prompt-sync')();

// Entrada de dados: solicita um número ao usuário
let numero = Number(prompt("Digite o número: "));

// Processamento / Decisão: verifica se o número é positivo ou negativo
if (numero >= 0) {
    // Saída caso o número seja maior ou igual a zero
    console.log("O número é positivo");
} else {
    // Saída caso o número seja menor que zero
    console.log("O número é negativo");
}
