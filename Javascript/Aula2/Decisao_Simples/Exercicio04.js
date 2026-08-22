var prompt = require('prompt-sync')();

// Entrada de dados: solicita uma letra ao usuário
let letra = prompt("Digite uma letra: ");

// Processamento: verifica se a letra digitada é "Z" (ou "z")
let correto = (letra.toUpperCase() === "Z");

// Decisão e Saída de dados
if (correto) {
    console.log("Letra Correta!");
} else {
    console.log("Letra incorreta!");
}
