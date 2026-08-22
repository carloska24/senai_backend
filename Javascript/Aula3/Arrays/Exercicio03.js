var prompt = require('prompt-sync')();

let notas = [];
let somaNotas = 0;

// Entrada de dados: armazena as notas de 5 alunos
console.log("Digite as notas de 5 alunos:");
for (let i = 0; i < 5; i++) {
    let nota = Number(prompt("Digite a nota do aluno " + (i + 1) + ": "));
    notas.push(nota);
    somaNotas += nota;
}

// Processamento: calcula a média da turma
let mediaFinal = somaNotas / 5;

// Saída de dados
console.log("\nNotas registradas: [" + notas.join(", ") + "]");
console.log("Média final da turma: " + mediaFinal.toFixed(2));
