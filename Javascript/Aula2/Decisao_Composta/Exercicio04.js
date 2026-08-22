var prompt = require('prompt-sync')();

// Entrada de dados: idade, carteira de motorista e instrutor
let idade = Number(prompt("Digite a idade da pessoa: "));
let temCarteira = prompt("Possui carteira de motorista? (Sim/Não): ");
let acompanhaInstrutor = prompt("Está acompanhada por um instrutor habilitado? (Sim/Não): ");

// Processamento: conversão das respostas para booleanos
let possuiCNH = (temCarteira.toLowerCase() === "sim");
let comInstrutor = (acompanhaInstrutor.toLowerCase() === "sim");

// Decisão: para dirigir precisa ser maior de idade E (ter carteira OU estar com instrutor)
let podeDirigir = (idade >= 18 && (possuiCNH || comInstrutor));

// Saída de dados
if (podeDirigir) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
