var prompt = require('prompt-sync')();

let senhaInformada;

// Estrutura FAÇA-ENQUANTO (do-while): executa o bloco pelo menos uma vez antes de testar
do {
    senhaInformada = Number(prompt("Digite a senha de acesso: "));

    if (senhaInformada !== 1234) {
        console.log("Senha incorreta! Tente novamente.");
    }
} while (senhaInformada !== 1234);

// Saída de dados após validação
console.log("Acesso concedido! Senha correta.");
