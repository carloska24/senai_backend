var prompt = require('prompt-sync')();

// Entrada de dados: solicita um número positivo
let numeroInformado = Number(prompt("Digite um número positivo: "));

// Laço ENQUANTO: repete enquanto o número digitado for negativo (< 0)
while (numeroInformado < 0) {
    console.log("Número inválido! O número digitado é negativo.");
    numeroInformado = Number(prompt("Digite um número positivo: "));
}

// Saída de dados: exibida após validação
console.log("Número positivo aceito com sucesso: " + numeroInformado);
