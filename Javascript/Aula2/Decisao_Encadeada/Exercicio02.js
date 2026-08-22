var prompt = require('prompt-sync')();

// Entrada de dados: solicita a temperatura em Celsius
let temperatura = Number(prompt("Digite a temperatura em graus Celsius: "));

// Processamento / Decisão encadeada da sensação térmica
if (temperatura > 30) {
    console.log("Está quente");
} else if (temperatura >= 20) {
    console.log("O clima está agradável");
} else {
    console.log("Está frio");
}
