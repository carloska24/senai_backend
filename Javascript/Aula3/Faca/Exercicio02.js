var prompt = require('prompt-sync')();

let numeroInformado;

// Estrutura FAÇA-ENQUANTO (do-while): solicita número até que seja maior ou igual a zero
do {
    numeroInformado = Number(prompt("Digite um número positivo: "));

    if (numeroInformado < 0) {
        console.log("O número informado é negativo! Tente novamente.");
    }
} while (numeroInformado < 0);

// Saída de dados: confirmando o número positivo aceito
console.log("Número positivo aceito com sucesso: " + numeroInformado);
