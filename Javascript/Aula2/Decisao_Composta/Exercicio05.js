var prompt = require('prompt-sync')();

// Entrada de dados: solicita uma letra
let letra = prompt("Digite uma letra: ");

// Processamento: verifica se o caractere digitado é uma vogal
let l = letra.toLowerCase();
let vogal = (l === "a" || l === "e" || l === "i" || l === "o" || l === "u");

// Saída de dados
if (vogal) {
    console.log("Vogal");
} else {
    console.log("Não é vogal");
}
