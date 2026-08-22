var prompt = require('prompt-sync')();

// Entrada de dados: 3 notas e percentual de frequência
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let frequencia = Number(prompt("Digite o percentual de frequência (%): "));

// Processamento: calcula a média aritmética das 3 notas
let media = (nota1 + nota2 + nota3) / 3;

// Processamento / Decisão: critério de aprovação (nota >= 6.0 ou frequência >= 75)
let aprovado = (media >= 6.0 || frequencia >= 75);

// Saída de dados
console.log("Média final: " + media.toFixed(2));
if (aprovado) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
