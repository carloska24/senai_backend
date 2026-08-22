var prompt = require('prompt-sync')();

// Entrada de dados: solicita o número para o cálculo do fatorial
let numero = Number(prompt("Digite um número para calcular o fatorial: "));

// Processamento: acumula multiplicações de 1 até o número informado
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

// Saída de dados: exibe o resultado final do fatorial
console.log(numero + "! = " + fatorial);
