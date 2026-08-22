// Banco de exercícios da Aula 2 (Estruturas de Decisão)
const data = {
  simples: [
    {
      id: "simples_01",
      num: "01",
      title: "Maior ou Menor de Idade",
      badge: "Decisão Simples • Idade",
      isDesafio: false,
      desc: "Lê a idade e determina se o usuário é maior (>= 18) ou menor de idade.",
      inputs: [
        { id: "idade", label: "Sua Idade (anos)", type: "number", placeholder: "Ex: 19", default: 20 }
      ],
      run: (v) => {
        const idade = Number(v.idade) || 0;
        const maior = idade >= 18;
        return {
          status: maior ? "status-approved" : "status-denied",
          main: maior ? "✅ Maior de idade" : "⛔ Menor de idade",
          details: [
            { label: "Idade Informada", value: `${idade} anos` },
            { label: "Critério", value: ">= 18 anos" },
            { label: "Classificação", value: maior ? "Maior de Idade" : "Menor de Idade" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a idade do usuário\nlet idade = Number(prompt("Digite sua idade: "));\n\n// Processamento / Decisão: verifica se é maior ou menor de idade\nif (idade >= 18) {\n    console.log("Maior de idade");\n} else {\n    console.log("Menor de idade");\n}`
    },
    {
      id: "simples_02",
      num: "02",
      title: "Número Positivo ou Negativo",
      badge: "Decisão Simples • Sinal Numérico",
      isDesafio: false,
      desc: "Lê um número e verifica se ele é positivo (>= 0) ou negativo.",
      inputs: [
        { id: "num", label: "Digite um número", type: "number", placeholder: "Ex: -5 ou 12", default: 12 }
      ],
      run: (v) => {
        const n = Number(v.num) || 0;
        const positivo = n >= 0;
        return {
          status: positivo ? "status-approved" : "status-denied",
          main: positivo ? `O número ${n} é <span class="result-highlight">Positivo</span>` : `O número ${n} é <span class="result-highlight">Negativo</span>`,
          details: [
            { label: "Número Digitado", value: n },
            { label: "Condição", value: ">= 0" },
            { label: "Resultado", value: positivo ? "Positivo (+)" : "Negativo (-)" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita um número ao usuário\nlet numero = Number(prompt("Digite o número: "));\n\n// Processamento / Decisão: verifica se o número é positivo ou negativo\nif (numero >= 0) {\n    console.log("O número é positivo");\n} else {\n    console.log("O número é negativo");\n}`
    },
    {
      id: "simples_03",
      num: "03",
      title: "Verificação de Média",
      badge: "Decisão Simples • Notas",
      isDesafio: false,
      desc: "Verifica se o estudante foi aprovado (média >= 7.0) ou reprovado.",
      inputs: [
        { id: "media", label: "Média do Aluno (0 a 10)", type: "number", placeholder: "Ex: 7.5", default: 7.5 }
      ],
      run: (v) => {
        const m = Number(v.media) || 0;
        const aprovado = m >= 7;
        return {
          status: aprovado ? "status-approved" : "status-denied",
          main: aprovado ? `🎉 Aluno Aprovado com média ${m.toFixed(1)}` : `❌ Aluno Reprovado com média ${m.toFixed(1)}`,
          details: [
            { label: "Média Obtida", value: m.toFixed(1) },
            { label: "Mínimo para Aprovação", value: "7.0" },
            { label: "Situação", value: aprovado ? "Aprovado" : "Reprovado" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a média do aluno\nlet media = Number(prompt("Digite a média: "));\n\n// Processamento / Decisão: verifica se o aluno foi aprovado ou reprovado\nif (media < 7) {\n    console.log("Aluno reprovado");\n} else {\n    console.log("Aluno aprovado");\n}`
    },
    {
      id: "simples_04",
      num: "04",
      title: "Verificação de Letra 'Z'",
      badge: "Decisão Simples • Caractere",
      isDesafio: false,
      desc: "Verifica se o caractere digitado é a letra correta 'Z'.",
      inputs: [
        { id: "letra", label: "Digite uma letra", type: "text", placeholder: "Ex: Z", default: "Z" }
      ],
      run: (v) => {
        const l = (v.letra || "").trim().toUpperCase();
        const correto = (l === "Z");
        return {
          status: correto ? "status-approved" : "status-denied",
          main: correto ? "✨ Letra Correta! ('Z')" : `❌ Letra Incorreta! (Digitou '${v.letra}')`,
          details: [
            { label: "Caractere Informado", value: v.letra || "-" },
            { label: "Caractere Esperado", value: "Z" },
            { label: "Status", value: correto ? "Correto" : "Incorreto" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita uma letra ao usuário\nlet letra = prompt("Digite uma letra: ");\n\n// Processamento: verifica se a letra digitada é "Z" (ou "z")\nlet correto = (letra.toUpperCase() === "Z");\n\n// Decisão e Saída de dados\nif (correto) {\n    console.log("Letra Correta!");\n} else {\n    console.log("Letra incorreta!");\n}`
    },
    {
      id: "simples_desafio",
      num: "⭐",
      title: "Desafio do Empréstimo",
      badge: "Desafio • Análise de Crédito",
      isDesafio: true,
      desc: "Analisa crédito com regras de idade (>=18), salário (>=1500), score (>=400) e limites combinados.",
      inputs: [
        { id: "idade", label: "Idade", type: "number", placeholder: "Ex: 25", default: 28 },
        { id: "salario", label: "Salário Mensal (R$)", type: "number", placeholder: "Ex: 3500", default: 3500 },
        { id: "score", label: "Score de Crédito (0 a 1000)", type: "number", placeholder: "Ex: 750", default: 750 },
        { id: "valor", label: "Valor Solicitado (R$)", type: "number", placeholder: "Ex: 10000", default: 10000 }
      ],
      run: (v) => {
        const idade = Number(v.idade) || 0;
        const salario = Number(v.salario) || 0;
        const score = Number(v.score) || 0;
        const valor = Number(v.valor) || 0;

        if (idade < 18) {
          return { status: "status-denied", main: "❌ Empréstimo Negado: Menor de idade.", details: [{ label: "Motivo", value: "Idade < 18 anos" }] };
        }
        if (salario < 1500) {
          return { status: "status-denied", main: "❌ Empréstimo Negado: Salário insuficiente.", details: [{ label: "Motivo", value: "Salário < R$ 1.500" }] };
        }
        if (score < 400) {
          return { status: "status-denied", main: "❌ Empréstimo Negado: Score insuficiente.", details: [{ label: "Motivo", value: "Score < 400" }] };
        }

        const limSal = salario <= 3000 ? 5000 : 15000;
        const limScore = score <= 699 ? 5000 : 15000;
        const limiteFinal = Math.min(limSal, limScore);

        if (valor > limiteFinal) {
          return {
            status: "status-denied",
            main: `❌ Empréstimo Negado: Solicitou R$ ${valor.toFixed(2)}, acima do limite disponível (R$ ${limiteFinal.toFixed(2)}).`,
            details: [
              { label: "Limite Salário", value: `R$ ${limSal.toFixed(2)}` },
              { label: "Limite Score", value: `R$ ${limScore.toFixed(2)}` },
              { label: "Limite Concedido", value: `R$ ${limiteFinal.toFixed(2)}` }
            ]
          };
        }

        return {
          status: "status-approved",
          main: `🎉 Empréstimo APROVADO no valor de <span class="result-highlight">R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>!`,
          details: [
            { label: "Limite Máximo Permitido", value: `R$ ${limiteFinal.toFixed(2)}` },
            { label: "Valor Liberado", value: `R$ ${valor.toFixed(2)}` },
            { label: "Score & Renda", value: `${score} pts / R$ ${salario.toFixed(2)}` }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a idade do cliente\nlet idade = Number(prompt("Digite a sua idade: "));\n\nif (idade < 18) {\n    console.log("Empréstimo negado: menor de idade.");\n} else {\n    let salario = Number(prompt("Digite o seu salário mensal (R$): "));\n    if (salario < 1500) {\n        console.log("Empréstimo negado: salário insuficiente.");\n    } else {\n        let score = Number(prompt("Digite o seu score de crédito (0 a 1000): "));\n        if (score < 400) {\n            console.log("Empréstimo negado: score insuficiente.");\n        } else {\n            let valorSolicitado = Number(prompt("Digite o valor do empréstimo solicitado (R$): "));\n            let limiteSalario = (salario <= 3000) ? 5000 : 15000;\n            let limiteScore = (score <= 699) ? 5000 : 15000;\n            let limiteFinal = Math.min(limiteSalario, limiteScore);\n            if (valorSolicitado > limiteFinal) {\n                console.log("Empréstimo negado: valor solicitado acima do limite.");\n            } else {\n                console.log("Empréstimo aprovado com sucesso!");\n            }\n        }\n    }\n}`
    }
  ],
  composta: [
    {
      id: "comp_01",
      num: "01",
      title: "Entrada no Parque",
      badge: "Decisão Composta • Idade & Ingresso",
      isDesafio: false,
      desc: "Verifica se a pessoa tem 18 anos ou mais E se possui ingresso válido para entrar.",
      inputs: [
        { id: "idade", label: "Idade da Pessoa", type: "number", placeholder: "Ex: 20", default: 20 },
        { id: "ingresso", label: "Possui Ingresso?", type: "select", options: ["Sim", "Não"], default: "Sim" }
      ],
      run: (v) => {
        const idade = Number(v.idade) || 0;
        const temIngresso = (v.ingresso === "Sim");
        const liberado = (idade >= 18 && temIngresso);
        return {
          status: liberado ? "status-approved" : "status-denied",
          main: liberado ? "🎡 Entrada Permitida!" : "⛔ Entrada Negada (Precisa ter 18+ anos e ingresso)",
          details: [
            { label: "Idade", value: `${idade} anos` },
            { label: "Ingresso", value: temIngresso ? "Possui" : "Não possui" },
            { label: "Status", value: liberado ? "Permitido" : "Negado" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: idade e posse do ingresso\nlet idade = Number(prompt("Digite a idade da pessoa: "));\nlet ingresso = prompt("Possui ingresso? (Sim/Não): ");\n\n// Processamento: normaliza a resposta do ingresso para booleano\nlet possuiIngresso = (ingresso.toLowerCase() === "sim");\n\n// Processamento / Decisão: verifica se tem 18 anos ou mais E se tem ingresso\nif (idade >= 18 && possuiIngresso) {\n    console.log("Entrada permitida");\n} else {\n    console.log("Entrada negada");\n}`
    },
    {
      id: "comp_02",
      num: "02",
      title: "Desconto por Compra ou VIP",
      badge: "Decisão Composta • Descontos",
      isDesafio: false,
      desc: "Concede desconto se a compra for superior a R$ 200 OU se o cliente for membro VIP.",
      inputs: [
        { id: "valor", label: "Valor da Compra (R$)", type: "number", placeholder: "Ex: 150.00", default: 250.00 },
        { id: "vip", label: "Cliente é VIP?", type: "select", options: ["Sim", "Não"], default: "Não" }
      ],
      run: (v) => {
        const val = Number(v.valor) || 0;
        const isVIP = (v.vip === "Sim");
        const desconto = (val > 200 || isVIP);
        return {
          status: desconto ? "status-approved" : "status-neutral",
          main: desconto ? "🏷️ Cliente RECEBE desconto especial!" : "🏷️ Cliente NÃO recebe desconto",
          details: [
            { label: "Valor Compra", value: `R$ ${val.toFixed(2)}` },
            { label: "Status VIP", value: isVIP ? "Sim (VIP)" : "Não" },
            { label: "Desconto", value: desconto ? "Aprovado" : "Inaplicável" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: valor da compra e status VIP\nlet valorCompra = Number(prompt("Digite o valor da compra (R$): "));\nlet clienteVIP = prompt("Cliente é VIP? (Sim/Não): ");\n\n// Processamento: verifica se é VIP\nlet isVIP = (clienteVIP.toLowerCase() === "sim");\n\n// Processamento / Decisão: desconto é concedido se compra > 200 OU cliente for VIP\nlet recebeDesconto = (valorCompra > 200 || isVIP);\n\n// Saída de dados\nif (recebeDesconto) {\n    console.log("Cliente recebe desconto");\n} else {\n    console.log("Cliente não recebe desconto");\n}`
    },
    {
      id: "comp_03",
      num: "03",
      title: "Média e Frequência Escolar",
      badge: "Decisão Composta • Frequência",
      isDesafio: false,
      desc: "Calcula a média de 3 notas e verifica a aprovação considerando notas e frequência escolar.",
      inputs: [
        { id: "n1", label: "Nota 1", type: "number", placeholder: "Ex: 7.0", default: 6.5 },
        { id: "n2", label: "Nota 2", type: "number", placeholder: "Ex: 6.0", default: 7.0 },
        { id: "n3", label: "Nota 3", type: "number", placeholder: "Ex: 8.0", default: 8.0 },
        { id: "freq", label: "Frequência (%)", type: "number", placeholder: "Ex: 80", default: 80 }
      ],
      run: (v) => {
        const n1 = Number(v.n1) || 0;
        const n2 = Number(v.n2) || 0;
        const n3 = Number(v.n3) || 0;
        const freq = Number(v.freq) || 0;
        const media = (n1 + n2 + n3) / 3;
        const aprovado = (media >= 6.0 || freq >= 75);

        return {
          status: aprovado ? "status-approved" : "status-denied",
          main: aprovado ? `🎓 Aluno APROVADO! Média: ${media.toFixed(2)} | Freq: ${freq}%` : `❌ Aluno REPROVADO! Média: ${media.toFixed(2)} | Freq: ${freq}%`,
          details: [
            { label: "Média Final", value: media.toFixed(2) },
            { label: "Frequência", value: `${freq}%` },
            { label: "Critério", value: "Média >= 6 ou Freq >= 75%" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: 3 notas e percentual de frequência\nlet nota1 = Number(prompt("Digite a primeira nota: "));\nlet nota2 = Number(prompt("Digite a segunda nota: "));\nlet nota3 = Number(prompt("Digite a terceira nota: "));\nlet frequencia = Number(prompt("Digite o percentual de frequência (%): "));\n\n// Processamento: calcula a média aritmética das 3 notas\nlet media = (nota1 + nota2 + nota3) / 3;\n\n// Processamento / Decisão: critério de aprovação (nota >= 6.0 ou frequência >= 75)\nlet aprovado = (media >= 6.0 || frequencia >= 75);\n\n// Saída de dados\nconsole.log("Média final: " + media.toFixed(2));\nif (aprovado) {\n    console.log("Aluno aprovado");\n} else {\n    console.log("Aluno reprovado");\n}`
    },
    {
      id: "comp_04",
      num: "04",
      title: "Permissão para Dirigir",
      badge: "Decisão Composta • CNH",
      isDesafio: false,
      desc: "Verifica se pode dirigir (idade >= 18 E [possuir carteira OU estar com instrutor habilitado]).",
      inputs: [
        { id: "idade", label: "Idade do Condutor", type: "number", placeholder: "Ex: 21", default: 19 },
        { id: "cnh", label: "Possui CNH?", type: "select", options: ["Sim", "Não"], default: "Sim" },
        { id: "instrutor", label: "Acompanhado por Instrutor?", type: "select", options: ["Sim", "Não"], default: "Não" }
      ],
      run: (v) => {
        const idade = Number(v.idade) || 0;
        const temCNH = (v.cnh === "Sim");
        const comInstrutor = (v.instrutor === "Sim");
        const pode = (idade >= 18 && (temCNH || comInstrutor));

        return {
          status: pode ? "status-approved" : "status-denied",
          main: pode ? "🚗 Pode Dirigir!" : "⛔ Não Pode Dirigir!",
          details: [
            { label: "Idade", value: `${idade} anos` },
            { label: "Possui CNH", value: temCNH ? "Sim" : "Não" },
            { label: "Instrutor", value: comInstrutor ? "Presente" : "Ausente" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: idade, carteira de motorista e instrutor\nlet idade = Number(prompt("Digite a idade da pessoa: "));\nlet temCarteira = prompt("Possui carteira de motorista? (Sim/Não): ");\nlet acompanhaInstrutor = prompt("Está acompanhada por um instrutor habilitado? (Sim/Não): ");\n\n// Processamento: conversão das respostas para booleanos\nlet possuiCNH = (temCarteira.toLowerCase() === "sim");\nlet comInstrutor = (acompanhaInstrutor.toLowerCase() === "sim");\n\n// Decisão: para dirigir precisa ser maior de idade E (ter carteira OU estar com instrutor)\nlet podeDirigir = (idade >= 18 && (possuiCNH || comInstrutor));\n\n// Saída de dados\nif (podeDirigir) {\n    console.log("Pode dirigir");\n} else {\n    console.log("Não pode dirigir");\n}`
    },
    {
      id: "comp_05",
      num: "05",
      title: "Verificação de Vogal",
      badge: "Decisão Composta • Vogal",
      isDesafio: false,
      desc: "Verifica se a letra informada é uma das 5 vogais (A, E, I, O, U).",
      inputs: [
        { id: "letra", label: "Digite uma letra", type: "text", placeholder: "Ex: E", default: "E" }
      ],
      run: (v) => {
        const l = (v.letra || "").trim().toLowerCase();
        const vogal = (l === "a" || l === "e" || l === "i" || l === "o" || l === "u");

        return {
          status: vogal ? "status-approved" : "status-neutral",
          main: vogal ? `🔤 O caractere '${v.letra}' é uma <span class="result-highlight">Vogal</span>` : `🔤 O caractere '${v.letra}' <span class="result-highlight">Não é vogal</span>`,
          details: [
            { label: "Caractere", value: v.letra || "-" },
            { label: "Classificação", value: vogal ? "Vogal" : "Consoante / Outro" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita uma letra\nlet letra = prompt("Digite uma letra: ");\n\n// Processamento: verifica se o caractere digitado é uma vogal\nlet l = letra.toLowerCase();\nlet vogal = (l === "a" || l === "e" || l === "i" || l === "o" || l === "u");\n\n// Saída de dados\nif (vogal) {\n    console.log("Vogal");\n} else {\n    console.log("Não é vogal");\n}`
    }
  ],
  encadeada: [
    {
      id: "enc_01",
      num: "01",
      title: "Classificação por Idade",
      badge: "Decisão Encadeada • Faixas Etárias",
      isDesafio: false,
      desc: "Classifica em Criança (<12), Adolescente (12 a 17) ou Adulta (>=18).",
      inputs: [
        { id: "idade", label: "Idade da Pessoa", type: "number", placeholder: "Ex: 15", default: 15 }
      ],
      run: (v) => {
        const idade = Number(v.idade) || 0;
        let categoria = "";
        if (idade < 12) categoria = "Criança 🧒";
        else if (idade <= 17) categoria = "Adolescente 🧑";
        else categoria = "Adulta 👨";

        return {
          status: "status-neutral",
          main: `Classificação: <span class="result-highlight">${categoria}</span> (${idade} anos)`,
          details: [
            { label: "Idade", value: `${idade} anos` },
            { label: "Faixa Etária", value: categoria }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a idade\nlet idade = Number(prompt("Digite a sua idade: "));\n\n// Processamento / Decisão encadeada por faixa etária\nif (idade < 12) {\n    console.log("Criança");\n} else if (idade <= 17) {\n    console.log("Adolescente");\n} else {\n    console.log("Adulta");\n}`
    },
    {
      id: "enc_02",
      num: "02",
      title: "Classificação de Temperatura",
      badge: "Decisão Encadeada • Clima",
      isDesafio: false,
      desc: "Classifica o clima: > 30°C (Quente), 20 a 30°C (Agradável) ou < 20°C (Frio).",
      inputs: [
        { id: "temp", label: "Temperatura (°C)", type: "number", placeholder: "Ex: 24", default: 24 }
      ],
      run: (v) => {
        const t = Number(v.temp) || 0;
        let clima = "";
        let status = "status-neutral";

        if (t > 30) {
          clima = "Está quente 🔥";
          status = "status-denied";
        } else if (t >= 20) {
          clima = "O clima está agradável 🌤️";
          status = "status-approved";
        } else {
          clima = "Está frio ❄️";
          status = "status-neutral";
        }

        return {
          status: status,
          main: `Sensação Térmica: <span class="result-highlight">${clima}</span> (${t}°C)`,
          details: [
            { label: "Graus Celsius", value: `${t} °C` },
            { label: "Sensação", value: clima }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a temperatura em Celsius\nlet temperatura = Number(prompt("Digite a temperatura em graus Celsius: "));\n\n// Processamento / Decisão encadeada da sensação térmica\nif (temperatura > 30) {\n    console.log("Está quente");\n} else if (temperatura >= 20) {\n    console.log("O clima está agradável");\n} else {\n    console.log("Está frio");\n}`
    },
    {
      id: "enc_03",
      num: "03",
      title: "Desempenho Escolar por Nota",
      badge: "Decisão Encadeada • Conceito",
      isDesafio: false,
      desc: "Classifica o desempenho: >= 9 (Excelente), >= 7 (Bom), >= 6 (Regular), < 6 (Reprovado).",
      inputs: [
        { id: "nota", label: "Nota do Aluno (0 a 10)", type: "number", placeholder: "Ex: 8.5", default: 8.5 }
      ],
      run: (v) => {
        const n = Number(v.nota) || 0;
        let status = "status-approved";
        let desc = "";

        if (n >= 9) desc = "Excelente 🏆";
        else if (n >= 7) desc = "Bom ⭐";
        else if (n >= 6) { desc = "Regular ⚠️"; status = "status-neutral"; }
        else { desc = "Reprovado ❌"; status = "status-denied"; }

        return {
          status: status,
          main: `Desempenho: <span class="result-highlight">${desc}</span> (Nota: ${n.toFixed(1)})`,
          details: [
            { label: "Nota Obtida", value: n.toFixed(1) },
            { label: "Conceito Final", value: desc }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a nota do aluno\nlet nota = Number(prompt("Digite a nota do aluno: "));\n\n// Processamento / Decisão encadeada do desempenho\nif (nota >= 9) {\n    console.log("Excelente");\n} else if (nota >= 7) {\n    console.log("Bom");\n} else if (nota >= 6) {\n    console.log("Regular");\n} else {\n    console.log("Reprovado");\n}`
    },
    {
      id: "enc_04",
      num: "04",
      title: "Desconto Progressivo por Faixa",
      badge: "Decisão Encadeada • Compras",
      isDesafio: false,
      desc: "Calcula descontos progressivos: >500 (20%), >200 (10%), >100 (5%), até 100 (0%).",
      inputs: [
        { id: "compra", label: "Valor Total da Compra (R$)", type: "number", placeholder: "Ex: 450.00", default: 350.00 }
      ],
      run: (v) => {
        const val = Number(v.compra) || 0;
        let pct = 0;
        if (val > 500) pct = 20;
        else if (val > 200) pct = 10;
        else if (val > 100) pct = 5;
        else pct = 0;

        const desc = (val * pct) / 100;
        const totalFinal = val - desc;

        return {
          status: pct > 0 ? "status-approved" : "status-neutral",
          main: `Desconto de <strong>${pct}%</strong> (-R$ ${desc.toFixed(2)}): Total Final <span class="result-highlight">R$ ${totalFinal.toFixed(2)}</span>`,
          details: [
            { label: "Valor Original", value: `R$ ${val.toFixed(2)}` },
            { label: "Percentual", value: `${pct}%` },
            { label: "Economia", value: `R$ ${desc.toFixed(2)}` },
            { label: "Total a Pagar", value: `R$ ${totalFinal.toFixed(2)}` }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o valor total da compra\nlet valorCompra = Number(prompt("Digite o valor da compra (R$): "));\n\n// Processamento: determina a porcentagem de desconto com base na faixa de valor\nlet percentualDesconto = 0;\n\nif (valorCompra > 500) {\n    percentualDesconto = 20;\n} else if (valorCompra > 200) {\n    percentualDesconto = 10;\n} else if (valorCompra > 100) {\n    percentualDesconto = 5;\n} else {\n    percentualDesconto = 0;\n}\n\n// Cálculos do desconto e do valor a pagar\nlet valorDesconto = (valorCompra * percentualDesconto) / 100;\nlet valorFinal = valorCompra - valorDesconto;\n\n// Saída de dados\nconsole.log("Percentual de desconto (%): " + percentualDesconto + "%");\nconsole.log("Valor do desconto (R$): " + valorDesconto.toFixed(2));\nconsole.log("Valor final com desconto (R$): " + valorFinal.toFixed(2));`
    },
    {
      id: "enc_05",
      num: "05",
      title: "Cálculo de Imposto de Renda (IRRF)",
      badge: "Decisão Encadeada • Tributação",
      isDesafio: false,
      desc: "Calcula a alíquota e valor do imposto: <=2000 (0%), <=3500 (10%), <=5000 (15%), >5000 (20%).",
      inputs: [
        { id: "salario", label: "Salário Bruto (R$)", type: "number", placeholder: "Ex: 4200.00", default: 4200.00 }
      ],
      run: (v) => {
        const sal = Number(v.salario) || 0;
        let aliq = 0;
        if (sal <= 2000) aliq = 0;
        else if (sal <= 3500) aliq = 10;
        else if (sal <= 5000) aliq = 15;
        else aliq = 20;

        const imposto = (sal * aliq) / 100;
        const liquido = sal - imposto;

        return {
          status: "status-neutral",
          main: `Salário Líquido: <span class="result-highlight">R$ ${liquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> (Alíquota: ${aliq}%)`,
          details: [
            { label: "Salário Bruto", value: `R$ ${sal.toFixed(2)}` },
            { label: "Alíquota IR", value: `${aliq}%` },
            { label: "Imposto Retido", value: `R$ ${imposto.toFixed(2)}` },
            { label: "Salário Líquido", value: `R$ ${liquido.toFixed(2)}` }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o salário do funcionário\nlet salario = Number(prompt("Digite o salário do funcionário (R$): "));\n\n// Processamento: determina a alíquota do Imposto de Renda pela faixa salarial\nlet aliquota = 0;\n\nif (salario <= 2000) {\n    aliquota = 0;\n} else if (salario <= 3500) {\n    aliquota = 10;\n} else if (salario <= 5000) {\n    aliquota = 15;\n} else {\n    aliquota = 20;\n}\n\n// Cálculos do imposto e salário líquido\nlet valorImposto = (salario * aliquota) / 100;\nlet salarioLiquido = salario - valorImposto;\n\n// Saída de dados\nconsole.log("Salário informado (R$): " + salario.toFixed(2));\nconsole.log("Alíquota de imposto: " + aliquota + "%");\nconsole.log("Valor do imposto retido (R$): " + valorImposto.toFixed(2));\nconsole.log("Salário líquido após o desconto (R$): " + salarioLiquido.toFixed(2));`
    }
  ]
};

// Estado
let currentCategory = "simples";
let currentExIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderSidebar();
  loadExercise(0);
  setupAccordion();
});

// Configura troca de categorias
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.cat;
      currentExIndex = 0;
      renderSidebar();
      loadExercise(0);
    });
  });
}

// Renderiza itens da sidebar
function renderSidebar() {
  const nav = document.getElementById("exerciseNav");
  nav.innerHTML = "";
  const list = data[currentCategory];

  list.forEach((ex, idx) => {
    const btn = document.createElement("button");
    btn.className = `exercise-btn ${ex.isDesafio ? "is-desafio" : ""} ${idx === currentExIndex ? "active" : ""}`;
    btn.onclick = () => loadExercise(idx);
    btn.innerHTML = `
      <div class="exercise-num">${ex.num}</div>
      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${ex.title}</span>
    `;
    nav.appendChild(btn);
  });
}

// Carrega exercício ativo
function loadExercise(idx) {
  currentExIndex = idx;
  const ex = data[currentCategory][idx];

  const buttons = document.querySelectorAll(".exercise-btn");
  buttons.forEach((b, i) => b.classList.toggle("active", i === idx));

  document.getElementById("exBadge").textContent = ex.badge;
  document.getElementById("exBadge").className = `exercise-badge ${ex.isDesafio ? "desafio" : ""}`;
  document.getElementById("exTitle").textContent = ex.title;
  document.getElementById("exDesc").textContent = ex.desc;

  const formGrid = document.getElementById("formGrid");
  formGrid.innerHTML = "";

  ex.inputs.forEach(input => {
    const group = document.createElement("div");
    group.className = "input-group";

    if (input.type === "select") {
      let optionsHtml = input.options.map(opt => `<option value="${opt}" ${opt === input.default ? 'selected' : ''}>${opt}</option>`).join("");
      group.innerHTML = `
        <label for="${input.id}">⚡ ${input.label}</label>
        <select id="${input.id}" class="select-field" onchange="executeCurrentExercise()">
          ${optionsHtml}
        </select>
      `;
    } else {
      group.innerHTML = `
        <label for="${input.id}">⚡ ${input.label}</label>
        <input 
          id="${input.id}" 
          class="input-field" 
          type="${input.type}" 
          placeholder="${input.placeholder}" 
          value="${input.default ?? ''}" 
          onkeydown="if(event.key==='Enter') executeCurrentExercise()"
        />
      `;
    }
    formGrid.appendChild(group);
  });

  document.getElementById("codeSnippet").textContent = ex.code;
  executeCurrentExercise();
}

// Executa cálculo
function executeCurrentExercise() {
  const ex = data[currentCategory][currentExIndex];
  const vals = {};

  ex.inputs.forEach(input => {
    const el = document.getElementById(input.id);
    vals[input.id] = el ? el.value : "";
  });

  const res = ex.run(vals);
  const resultBox = document.getElementById("resultBox");
  const resultContent = document.getElementById("resultContent");
  const resultDetails = document.getElementById("resultDetails");

  resultBox.className = `result-box ${res.status || 'status-neutral'}`;
  resultContent.innerHTML = res.main;

  resultDetails.innerHTML = "";
  if (res.details && res.details.length > 0) {
    res.details.forEach(item => {
      const div = document.createElement("div");
      div.className = "detail-item";
      div.innerHTML = `
        <div class="detail-label">${item.label}</div>
        <div class="detail-value">${item.value}</div>
      `;
      resultDetails.appendChild(div);
    });
  }
}

// Limpa campos
function clearCurrentInputs() {
  const ex = data[currentCategory][currentExIndex];
  ex.inputs.forEach(input => {
    const el = document.getElementById(input.id);
    if (el) el.value = "";
  });
  document.getElementById("resultContent").innerHTML = `<span style="color: var(--text-dim);">Aguardando execução...</span>`;
  document.getElementById("resultDetails").innerHTML = "";
  document.getElementById("resultBox").className = "result-box status-neutral";
}

function setupAccordion() {
  const header = document.getElementById("codeHeader");
  const section = document.getElementById("codeSection");
  header.addEventListener("click", () => {
    section.classList.toggle("open");
  });
}

function copyCode() {
  const code = document.getElementById("codeSnippet").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById("copyBtn");
    const originalText = btn.textContent;
    btn.textContent = "Copiado! ✓";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
}
