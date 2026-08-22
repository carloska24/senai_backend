var prompt = require('prompt-sync')();

// Entrada de dados: solicita uma nota
let notaAluno = Number(prompt("Digite uma nota entre 0 e 10: "));

// Laço ENQUANTO: repete enquanto a nota for menor que 0 ou maior que 10
while (notaAluno < 0 || notaAluno > 10) {
    console.log("Nota inválida! A nota deve estar entre 0 e 10.");
    notaAluno = Number(prompt("Digite novamente uma nota entre 0 e 10: "));
}

// Saída de dados: confirmando a nota válida
console.log("Nota válida registrada com sucesso: " + notaAluno);
