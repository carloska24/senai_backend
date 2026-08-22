var prompt = require('prompt-sync')();

// Entrada de dados: idade e posse do ingresso
let idade = Number(prompt("Digite a idade da pessoa: "));
let ingresso = prompt("Possui ingresso? (Sim/Não): ");

// Processamento: normaliza a resposta do ingresso para booleano
let possuiIngresso = (ingresso.toLowerCase() === "sim");

// Processamento / Decisão: verifica se tem 18 anos ou mais E se tem ingresso
if (idade >= 18 && possuiIngresso) {
    console.log("Entrada permitida");
} else {
    console.log("Entrada negada");
}
