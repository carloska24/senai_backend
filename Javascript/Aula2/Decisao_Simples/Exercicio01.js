var prompt = require('prompt-sync')();

// Entrada de dados: solicita a idade do usuário
let idade = Number(prompt("Digite sua idade: "));

// Processamento / Decisão: verifica se é maior ou menor de idade
if (idade >= 18) {
    // Saída caso a condição seja verdadeira
    console.log("Maior de idade");
} else {
    // Saída caso a condição seja falsa
    console.log("Menor de idade");
}
