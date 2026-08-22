var prompt = require('prompt-sync')();

// Entrada de dados: solicita a nota do aluno
let nota = Number(prompt("Digite a nota do aluno: "));

// Processamento / Decisão encadeada do desempenho
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 6) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}
