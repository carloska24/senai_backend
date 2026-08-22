var prompt = require('prompt-sync')();

// Entrada de dados: primeira tentativa de senha
let senhaInformada = Number(prompt("Digite a senha de acesso: "));

// Laço ENQUANTO: repete enquanto a senha digitada for incorreta
while (senhaInformada !== 1234) {
    console.log("Senha incorreta! Tente novamente:");
    senhaInformada = Number(prompt("Digite a senha de acesso: "));
}

// Saída de dados: exibida após a validação correta
console.log("Acesso concedido! Senha correta.");
