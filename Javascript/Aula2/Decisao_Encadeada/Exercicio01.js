var prompt = require('prompt-sync')();

// Entrada de dados: solicita a idade
let idade = Number(prompt("Digite a sua idade: "));

// Processamento / Decisão encadeada por faixa etária
if (idade < 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else {
    console.log("Adulta");
}
