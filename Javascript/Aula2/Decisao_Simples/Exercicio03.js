var prompt = require('prompt-sync')();

// Entrada de dados: solicita a média do aluno
let media = Number(prompt("Digite a média: "));

// Processamento / Decisão: verifica se o aluno foi aprovado ou reprovado
if (media < 7) {
    // Saída caso a média seja menor que 7
    console.log("Aluno reprovado");
} else {
    // Saída caso a média seja igual ou maior que 7
    console.log("Aluno aprovado");
}
