var prompt = require('prompt-sync')();

// Entrada de dados: valor da hora e quantidade de horas trabalhadas
let valorHora = Number(prompt("Digite quanto você ganha por hora: "));
let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas: "));

// Processamento: calcula o salário bruto
let salarioBruto = horasTrabalhadas * valorHora;

// Processamento: calcula as deduções (INSS, IR e Sindicato)
let inss = salarioBruto * 0.08;
let imposto = salarioBruto * 0.11;
let sindicato = salarioBruto * 0.05;

// Processamento: calcula o salário líquido
let salarioLiquido = salarioBruto - inss - sindicato;

// Saída de dados: exibe os resultados na tela
console.log("salário bruto = " + salarioBruto);
console.log("quanto pagou ao INSS? " + inss);
console.log("quanto pagou ao sindicato? " + sindicato);
console.log("o salário líquido é: " + salarioLiquido);
