var prompt = require('prompt-sync')();

let notaAluno;

// Estrutura FAÇA-ENQUANTO (do-while): solicita a nota até que esteja na faixa de 0 a 10
do {
    notaAluno = Number(prompt("Digite uma nota entre 0 e 10: "));

    if (notaAluno < 0 || notaAluno > 10) {
        console.log("Nota inválida! A nota deve estar entre 0 e 10.");
    }
} while (notaAluno < 0 || notaAluno > 10);

// Saída de dados
console.log("Nota válida registrada com sucesso: " + notaAluno);
