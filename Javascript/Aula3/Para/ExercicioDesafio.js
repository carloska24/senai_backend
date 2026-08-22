var prompt = require('prompt-sync')();

let numero;
let valido = false;

// Validação de entrada: repete até o usuário digitar um valor positivo (> 0)
while (!valido) {
    numero = Number(prompt("Digite um número positivo para calcular o fatorial: "));

    if (numero < 0) {
        console.log("Número negativo (não existe fatorial para negativos). Insira novamente.");
    } else if (numero === 0) {
        console.log("Fatorial de 0 é 1 (0! = 1). Insira um novo valor positivo para calcular.");
    } else {
        valido = true;
    }
}

// Processamento: calcula o fatorial utilizando a estrutura PARA
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

// Saída de dados
console.log(numero + "! = " + fatorial);
