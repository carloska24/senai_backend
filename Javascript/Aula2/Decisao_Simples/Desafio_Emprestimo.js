var prompt = require('prompt-sync')();

// Entrada de dados: solicita a idade do cliente
let idade = Number(prompt("Digite a sua idade: "));

// Validação de maioridade
if (idade < 18) {
    console.log("Empréstimo negado: menor de idade.");
} else {
    // Entrada de dados: salário mensal
    let salario = Number(prompt("Digite o seu salário mensal (R$): "));
    
    // Validação da renda mínima
    if (salario < 1500) {
        console.log("Empréstimo negado: salário insuficiente.");
    } else {
        // Entrada de dados: score de crédito
        let score = Number(prompt("Digite o seu score de crédito (0 a 1000): "));
        
        // Validação do score mínimo
        if (score < 400) {
            console.log("Empréstimo negado: score insuficiente.");
        } else {
            // Entrada de dados: valor desejado
            let valorSolicitado = Number(prompt("Digite o valor do empréstimo solicitado (R$): "));
            
            // Processamento: definição de limite pela faixa salarial
            let limiteSalario = (salario <= 3000) ? 5000 : 15000;
            
            // Processamento: definição de limite pela faixa de score
            let limiteScore = (score <= 699) ? 5000 : 15000;
            
            // Processamento: o limite final é o menor entre salário e score
            let limiteFinal = Math.min(limiteSalario, limiteScore);
            
            // Decisão e Saída de dados: verifica aprovação
            if (valorSolicitado > limiteFinal) {
                console.log("Empréstimo negado: valor solicitado acima do limite (Limite disponível: R$ " + limiteFinal + ").");
            } else {
                console.log("Empréstimo aprovado com sucesso! Valor liberado: R$ " + valorSolicitado);
            }
        }
    }
}
