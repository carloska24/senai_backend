// Base de dados e lógica dos exercícios da Aula 3 (Laços e Vetores)
const data = {
  para: [
    {
      id: "para_01",
      num: "01",
      title: "Contagem de 1 até 10",
      badge: "Laço PARA • Incremento",
      isDesafio: false,
      desc: "Executa um laço for de 1 até 10 e exibe cada número gerado.",
      inputs: [],
      run: () => {
        let arr = [];
        for (let i = 1; i <= 10; i++) arr.push(i);
        return {
          main: `Sequência gerada: <div class="items-grid-display">${arr.map(n => `<span class="item-chip">${n}</span>`).join('')}</div>`,
          details: [
            { label: "Início", value: "1" },
            { label: "Fim", value: "10" },
            { label: "Total de Iterações", value: "10" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Laço de repetição PARA: conta e exibe os números de 1 até 10\nconsole.log("Contagem de 1 a 10:");\nfor (let i = 1; i <= 10; i++) {\n    console.log(i);\n}`
    },
    {
      id: "para_02",
      num: "02",
      title: "Contagem Decrescente 100 até 1",
      badge: "Laço PARA • Decremento",
      isDesafio: false,
      desc: "Executa um laço for decrementando de 100 até 1.",
      inputs: [],
      run: () => {
        let arr = [];
        for (let i = 100; i >= 1; i--) arr.push(i);
        return {
          main: `Mostrando contagem decrescente (primeiros e últimos números):<br>
                 <div class="items-grid-display">
                   ${arr.slice(0, 10).map(n => `<span class="item-chip">${n}</span>`).join('')}
                   <span style="color: var(--text-dim); align-self: center;">...</span>
                   ${arr.slice(-10).map(n => `<span class="item-chip">${n}</span>`).join('')}
                 </div>`,
          details: [
            { label: "Início", value: "100" },
            { label: "Fim", value: "1" },
            { label: "Total Exibido", value: "100 números" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Laço de repetição PARA: conta e exibe os números de 100 até 1 em ordem decrescente\nconsole.log("Contagem decrescente de 100 a 1:");\nfor (let i = 100; i >= 1; i--) {\n    console.log(i);\n}`
    },
    {
      id: "para_03",
      num: "03",
      title: "Números Pares de 0 até 20",
      badge: "Laço PARA • Passo 2",
      isDesafio: false,
      desc: "Gera números pares de 0 a 20 incrementando de 2 em 2 sem usar módulo.",
      inputs: [],
      run: () => {
        let arr = [];
        for (let i = 0; i <= 20; i += 2) arr.push(i);
        return {
          main: `Números pares no intervalo: <div class="items-grid-display">${arr.map(n => `<span class="item-chip">${n}</span>`).join('')}</div>`,
          details: [
            { label: "Início", value: "0" },
            { label: "Fim", value: "20" },
            { label: "Passo", value: "+2" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Laço de repetição PARA: exibe números pares de 0 até 20 avançando de 2 em 2\nconsole.log("Números pares de 0 até 20:");\nfor (let i = 0; i <= 20; i += 2) {\n    console.log(i);\n}`
    },
    {
      id: "para_04",
      num: "04",
      title: "Tabuada de um Número",
      badge: "Laço PARA • Multiplicação",
      isDesafio: false,
      desc: "Calcula a tabuada completa de 1 a 10 para o número fornecido.",
      inputs: [
        { id: "num", label: "Número para calcular a tabuada", type: "number", placeholder: "Ex: 7", default: 7 }
      ],
      run: (v) => {
        const n = Number(v.num) || 0;
        let linhas = [];
        for (let i = 1; i <= 10; i++) {
          linhas.push(`${n} × ${i} = <strong>${n * i}</strong>`);
        }
        return {
          main: `<strong>Tabuada do ${n}:</strong><br><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-top: 0.5rem;">${linhas.map(l => `<span class="item-chip">${l}</span>`).join('')}</div>`,
          details: [
            { label: "Multiplicando", value: n },
            { label: "Variação", value: "1 a 10" },
            { label: "Total de Operações", value: "10" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o número para gerar a tabuada\nlet numero = Number(prompt("Digite um número para ver a sua tabuada: "));\n\n// Processamento e Saída: laço PARA de 1 até 10 calculando cada multiplicação\nconsole.log("\\n--- Tabuada do " + numero + " ---");\nfor (let i = 1; i <= 10; i++) {\n    let resultado = numero * i;\n    console.log(numero + " x " + i + " = " + resultado);\n}`
    },
    {
      id: "para_05",
      num: "05",
      title: "Sequência Personalizada",
      badge: "Laço PARA • Faixa Dinâmica",
      isDesafio: false,
      desc: "Gera a sequência numérica de início até fim (suporta crescente e decrescente).",
      inputs: [
        { id: "inicio", label: "Número Inicial", type: "number", placeholder: "Ex: 5", default: 5 },
        { id: "fim", label: "Número Final", type: "number", placeholder: "Ex: 15", default: 15 }
      ],
      run: (v) => {
        const inicio = Number(v.inicio) || 0;
        const fim = Number(v.fim) || 0;
        let arr = [];

        if (inicio <= fim) {
          for (let i = inicio; i <= fim; i++) arr.push(i);
        } else {
          for (let i = inicio; i >= fim; i--) arr.push(i);
        }

        return {
          main: `Sequência de ${inicio} até ${fim} (${inicio <= fim ? 'Crescente' : 'Decrescente'}):<div class="items-grid-display">${arr.map(n => `<span class="item-chip">${n}</span>`).join('')}</div>`,
          details: [
            { label: "Início", value: inicio },
            { label: "Fim", value: fim },
            { label: "Total de Números", value: arr.length }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o início e fim da sequência\nlet inicio = Number(prompt("Digite o número de início: "));\nlet fim = Number(prompt("Digite o número de fim: "));\n\n// Processamento: verifica se a sequência é crescente ou decrescente\nif (inicio <= fim) {\n    for (let i = inicio; i <= fim; i++) {\n        console.log(i);\n    }\n} else {\n    for (let i = inicio; i >= fim; i--) {\n        console.log(i);\n    }\n}`
    },
    {
      id: "para_06",
      num: "06",
      title: "Cálculo de Fatorial Básico",
      badge: "Laço PARA • Fatorial",
      isDesafio: false,
      desc: "Calcula o fatorial (N!) acumulando o produto de 1 até o número informado.",
      inputs: [
        { id: "num", label: "Número (N >= 1)", type: "number", placeholder: "Ex: 5", default: 5 }
      ],
      run: (v) => {
        const n = Math.max(1, Number(v.num) || 1);
        let fat = 1;
        let passos = [];
        for (let i = 1; i <= n; i++) {
          fat *= i;
          passos.push(i);
        }
        return {
          main: `${n}! = ${passos.join(' × ')} = <span class="result-highlight">${fat.toLocaleString('pt-BR')}</span>`,
          details: [
            { label: "Número Informado", value: n },
            { label: "Fórmula", value: `${n} × (${n}-1) ... × 1` },
            { label: "Resultado (N!)", value: fat.toLocaleString('pt-BR') }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o número para o cálculo do fatorial\nlet numero = Number(prompt("Digite um número para calcular o fatorial: "));\n\n// Processamento: acumula multiplicações de 1 até o número informado\nlet fatorial = 1;\nfor (let i = 1; i <= numero; i++) {\n    fatorial = fatorial * i;\n}\n\n// Saída de dados: exibe o resultado final do fatorial\nconsole.log(numero + "! = " + fatorial);`
    },
    {
      id: "para_desafio",
      num: "⭐",
      title: "Desafio Fatorial com Validação",
      badge: "Desafio • Validação & Loop",
      isDesafio: true,
      desc: "Valida números negativos e zero antes de calcular o fatorial.",
      inputs: [
        { id: "num", label: "Digite um número positivo", type: "number", placeholder: "Ex: 6", default: 6 }
      ],
      run: (v) => {
        const n = Number(v.num);
        if (isNaN(n) || n < 0) {
          return {
            main: `<span style="color: var(--danger);">❌ Número negativo ou inválido! O fatorial é definido apenas para números inteiros não negativos.</span>`,
            details: [{ label: "Status", value: "Entrada Inválida" }]
          };
        }
        if (n === 0) {
          return {
            main: `0! = <span class="result-highlight">1</span> (Por definição matemática)`,
            details: [{ label: "Entrada", value: 0 }, { label: "Resultado", value: 1 }]
          };
        }
        let fat = 1;
        for (let i = 1; i <= n; i++) fat *= i;
        return {
          main: `✅ Fatorial de <strong>${n}!</strong> é: <span class="result-highlight">${fat.toLocaleString('pt-BR')}</span>`,
          details: [
            { label: "Número Validado", value: n },
            { label: "Resultado Final", value: fat.toLocaleString('pt-BR') }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numero;\nlet valido = false;\n\nwhile (!valido) {\n    numero = Number(prompt("Digite um número positivo para calcular o fatorial: "));\n    if (numero < 0) {\n        console.log("Número negativo (não existe fatorial). Insira novamente.");\n    } else if (numero === 0) {\n        console.log("Fatorial de 0 é 1 (0! = 1). Insira um novo valor positivo para calcular.");\n    } else {\n        valido = true;\n    }\n}\n\nlet fatorial = 1;\nfor (let i = 1; i <= numero; i++) {\n    fatorial = fatorial * i;\n}\nconsole.log(numero + "! = " + fatorial);`
    }
  ],
  enquanto: [
    {
      id: "enq_01",
      num: "01",
      title: "Validação de Senha",
      badge: "Laço ENQUANTO • Autenticação",
      isDesafio: false,
      desc: "Simula o laço while que repete a solicitação até a senha correta (1234) ser digitada.",
      inputs: [
        { id: "senha", label: "Senha de Acesso", type: "number", placeholder: "Tente 1234 ou outro", default: 1234 }
      ],
      run: (v) => {
        const s = Number(v.senha);
        const correto = (s === 1234);
        return {
          main: correto ? "🔓 <span style='color: var(--success);'>Acesso Concedido! Senha correta (1234).</span>" : "🔒 <span style='color: var(--danger);'>Senha Incorreta! O laço while continuaria solicitando.</span>",
          details: [
            { label: "Senha Digitada", value: v.senha || "-" },
            { label: "Senha Correta", value: "1234" },
            { label: "Status do Laço", value: correto ? "Liberado" : "Repetindo..." }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: primeira tentativa de senha\nlet senhaInformada = Number(prompt("Digite a senha de acesso: "));\n\n// Laço ENQUANTO: repete enquanto a senha digitada for incorreta\nwhile (senhaInformada !== 1234) {\n    console.log("Senha incorreta! Tente novamente:");\n    senhaInformada = Number(prompt("Digite a senha de acesso: "));\n}\n\n// Saída de dados: exibida após a validação correta\nconsole.log("Acesso concedido! Senha correta.");`
    },
    {
      id: "enq_02",
      num: "02",
      title: "Validação de Número Positivo",
      badge: "Laço ENQUANTO • Validação",
      isDesafio: false,
      desc: "Garante que o número aceito seja estritamente positivo (>= 0).",
      inputs: [
        { id: "num", label: "Digite um número", type: "number", placeholder: "Ex: 25", default: 25 }
      ],
      run: (v) => {
        const n = Number(v.num);
        const valido = n >= 0;
        return {
          main: valido ? `✅ Número positivo aceito com sucesso: <span class="result-highlight">${n}</span>` : `❌ Número inválido (${n} < 0). O laço while rejeitaria.`,
          details: [
            { label: "Valor Informado", value: n },
            { label: "Condição", value: ">= 0" },
            { label: "Validação", value: valido ? "Aceito" : "Inválido" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita um número positivo\nlet numeroInformado = Number(prompt("Digite um número positivo: "));\n\n// Laço ENQUANTO: repete enquanto o número digitado for negativo (< 0)\nwhile (numeroInformado < 0) {\n    console.log("Número inválido! O número digitado é negativo.");\n    numeroInformado = Number(prompt("Digite um número positivo: "));\n}\n\n// Saída de dados: exibida após validação\nconsole.log("Número positivo aceito com sucesso: " + numeroInformado);`
    },
    {
      id: "enq_03",
      num: "03",
      title: "Somatório Acumulador Interativo",
      badge: "Laço ENQUANTO • Acumulador",
      isDesafio: false,
      desc: "Soma múltiplos valores separados por vírgula simulando o fluxo de continuar somando (S/N).",
      inputs: [
        { id: "valores", label: "Valores para somar (separados por vírgula)", type: "text", placeholder: "Ex: 10, 25, 30, 5", default: "15, 20, 35, 10" }
      ],
      run: (v) => {
        const nums = (v.valores || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const total = nums.reduce((acc, curr) => acc + curr, 0);
        return {
          main: `Soma dos ${nums.length} valores inseridos: <span class="result-highlight">${total}</span>`,
          details: [
            { label: "Valores Somados", value: `[ ${nums.join(' + ')} ]` },
            { label: "Total Acumulado", value: total }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet totalAcumulado = 0;\nlet desejaContinuar = "S";\n\nwhile (desejaContinuar.toUpperCase() === "S") {\n    console.log("\\nValor total acumulado até o momento: " + totalAcumulado);\n    let numeroInserido = Number(prompt("Digite um número para somar ao total: "));\n    totalAcumulado += numeroInserido;\n    desejaContinuar = prompt("Deseja continuar somando? (S/N): ");\n}\n\nconsole.log("\\nProcesso finalizado. Valor total acumulado final: " + totalAcumulado);`
    },
    {
      id: "enq_04",
      num: "04",
      title: "Validação de Nota (0 a 10)",
      badge: "Laço ENQUANTO • Faixa",
      isDesafio: false,
      desc: "Rejeita notas menores que 0 ou maiores que 10.",
      inputs: [
        { id: "nota", label: "Nota do Aluno", type: "number", placeholder: "Ex: 8.5", default: 8.5 }
      ],
      run: (v) => {
        const nota = Number(v.nota);
        const valida = nota >= 0 && nota <= 10;
        return {
          main: valida ? `✅ Nota válida registrada: <span class="result-highlight">${nota.toFixed(1)}</span>` : `❌ Nota inválida (${nota}). Deve estar estritamente entre 0 e 10.`,
          details: [
            { label: "Nota Digitada", value: nota },
            { label: "Intervalo Válido", value: "0.0 a 10.0" },
            { label: "Status", value: valida ? "Válida" : "Inválida" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita uma nota\nlet notaAluno = Number(prompt("Digite uma nota entre 0 e 10: "));\n\n// Laço ENQUANTO: repete enquanto a nota for menor que 0 ou maior que 10\nwhile (notaAluno < 0 || notaAluno > 10) {\n    console.log("Nota inválida! A nota deve estar entre 0 e 10.");\n    notaAluno = Number(prompt("Digite novamente uma nota entre 0 e 10: "));\n}\n\n// Saída de dados: confirmando a nota válida\nconsole.log("Nota válida registrada com sucesso: " + notaAluno);`
    },
    {
      id: "enq_05",
      num: "05",
      title: "Contagem Regressiva até 0",
      badge: "Laço ENQUANTO • Regressiva",
      isDesafio: false,
      desc: "Realiza a contagem regressiva de N até 0 utilizando laço while.",
      inputs: [
        { id: "num", label: "Número Inicial para Contagem", type: "number", placeholder: "Ex: 10", default: 10 }
      ],
      run: (v) => {
        const n = Math.max(0, Number(v.num) || 0);
        let arr = [];
        let c = n;
        while (c >= 0) {
          arr.push(c);
          c--;
        }
        return {
          main: `Contagem regressiva de ${n} até 0:<div class="items-grid-display">${arr.map(item => `<span class="item-chip">${item}</span>`).join('')}</div>`,
          details: [
            { label: "Início", value: n },
            { label: "Destino", value: "0" },
            { label: "Total de Passos", value: arr.length }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita o número inicial para a contagem\nlet numeroInicial = Number(prompt("Digite um número inteiro para iniciar a contagem regressiva: "));\nlet contador = numeroInicial;\n\n// Laço ENQUANTO: decrementa o contador até chegar em 0\nwhile (contador >= 0) {\n    console.log(contador);\n    contador--;\n}\n\nconsole.log("Contagem regressiva finalizada!");`
    },
    {
      id: "enq_desafio",
      num: "⭐",
      title: "Desafio Pares e Ímpares de 1 a 100",
      badge: "Desafio • Somatório Par / Ímpar",
      isDesafio: true,
      desc: "Percorre de 1 a 100 acumulando a soma de números pares e de ímpares separadamente.",
      inputs: [],
      run: () => {
        let c = 1, pares = 0, impares = 0;
        while (c <= 100) {
          if (c % 2 === 0) pares += c;
          else impares += c;
          c++;
        }
        return {
          main: `Soma dos pares: <span class="result-highlight">${pares.toLocaleString('pt-BR')}</span> | Soma dos ímpares: <span class="result-highlight">${impares.toLocaleString('pt-BR')}</span>`,
          details: [
            { label: "Soma Pares (2..100)", value: pares.toLocaleString('pt-BR') },
            { label: "Soma Ímpares (1..99)", value: impares.toLocaleString('pt-BR') },
            { label: "Soma Total (1..100)", value: (pares + impares).toLocaleString('pt-BR') }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet contador = 1;\nlet somaPares = 0;\nlet somaImpares = 0;\n\nwhile (contador <= 100) {\n    if (contador % 2 === 0) {\n        somaPares += contador;\n    } else {\n        somaImpares += contador;\n    }\n    contador++;\n}\n\nconsole.log("--- Somatório de 1 a 100 ---");\nconsole.log("Soma de todos os números pares entre 1 e 100: " + somaPares);\nconsole.log("Soma de todos os números ímpares entre 1 e 100: " + somaImpares);`
    }
  ],
  faca: [
    {
      id: "faca_01",
      num: "01",
      title: "Validação de Senha (Do-While)",
      badge: "Laço FAÇA-ENQUANTO • Senha",
      isDesafio: false,
      desc: "Executa ao menos uma vez e repete até a senha 1234 ser digitada.",
      inputs: [
        { id: "senha", label: "Senha informada", type: "number", placeholder: "Tente 1234", default: 1234 }
      ],
      run: (v) => {
        const s = Number(v.senha);
        const correto = (s === 1234);
        return {
          main: correto ? "🔓 <span style='color: var(--success);'>Acesso concedido com Faça-Enquanto (do-while)!</span>" : "🔒 <span style='color: var(--danger);'>Senha incorreta! A estrutura repetiria a solicitação.</span>",
          details: [
            { label: "Entrada", value: v.senha || "-" },
            { label: "Validação", value: correto ? "Aprovado" : "Reprovado" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet senhaInformada;\n\ndo {\n    senhaInformada = Number(prompt("Digite a senha de acesso: "));\n    if (senhaInformada !== 1234) {\n        console.log("Senha incorreta! Tente novamente.");\n    }\n} while (senhaInformada !== 1234);\n\nconsole.log("Acesso concedido! Senha correta.");`
    },
    {
      id: "faca_02",
      num: "02",
      title: "Validação de Positivo (Do-While)",
      badge: "Laço FAÇA-ENQUANTO • Positivo",
      isDesafio: false,
      desc: "Solicita número com repetição pós-teste até receber número positivo.",
      inputs: [
        { id: "num", label: "Digite um número", type: "number", placeholder: "Ex: 40", default: 40 }
      ],
      run: (v) => {
        const n = Number(v.num);
        const ok = n >= 0;
        return {
          main: ok ? `✅ Número positivo aceito com do-while: <span class="result-highlight">${n}</span>` : `❌ Número negativo (${n}). Repetiria com do-while.`,
          details: [
            { label: "Número", value: n },
            { label: "Status", value: ok ? "Aceito" : "Inválido" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeroInformado;\n\ndo {\n    numeroInformado = Number(prompt("Digite um número positivo: "));\n    if (numeroInformado < 0) {\n        console.log("O número informado é negativo! Tente novamente.");\n    }\n} while (numeroInformado < 0);\n\nconsole.log("Número positivo aceito com sucesso: " + numeroInformado);`
    },
    {
      id: "faca_03",
      num: "03",
      title: "Acumulador com Confirmação (Do-While)",
      badge: "Laço FAÇA-ENQUANTO • Acumulador",
      isDesafio: false,
      desc: "Soma números com validação de continuidade ao final de cada rodada.",
      inputs: [
        { id: "valores", label: "Valores a somar (separados por vírgula)", type: "text", placeholder: "Ex: 50, 100, 25", default: "50, 100, 25" }
      ],
      run: (v) => {
        const nums = (v.valores || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const total = nums.reduce((a, b) => a + b, 0);
        return {
          main: `Total acumulado com do-while: <span class="result-highlight">${total}</span>`,
          details: [
            { label: "Itens Somados", value: nums.length },
            { label: "Total Final", value: total }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet totalAcumulado = 0;\nlet desejaContinuar;\n\ndo {\n    console.log("\\nValor total acumulado até o momento: " + totalAcumulado);\n    let numeroInserido = Number(prompt("Digite um número para somar ao total: "));\n    totalAcumulado += numeroInserido;\n    desejaContinuar = prompt("Deseja continuar somando? (S/N): ");\n} while (desejaContinuar.toUpperCase() === "S");\n\nconsole.log("\\nProcesso finalizado. Valor total acumulado final: " + totalAcumulado);`
    },
    {
      id: "faca_04",
      num: "04",
      title: "Validação de Nota (Do-While)",
      badge: "Laço FAÇA-ENQUANTO • Nota",
      isDesafio: false,
      desc: "Garante que a nota informada esteja entre 0 e 10 utilizando o laço Faça-Enquanto.",
      inputs: [
        { id: "nota", label: "Nota do Aluno (0 a 10)", type: "number", placeholder: "Ex: 9.5", default: 9.5 }
      ],
      run: (v) => {
        const n = Number(v.nota);
        const ok = (n >= 0 && n <= 10);
        return {
          main: ok ? `✅ Nota válida aceita com do-while: <span class="result-highlight">${n.toFixed(1)}</span>` : `❌ Nota inválida (${n}). Fora da faixa de 0 a 10.`,
          details: [
            { label: "Nota", value: n },
            { label: "Situação", value: ok ? "Válida" : "Inválida" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet notaAluno;\n\ndo {\n    notaAluno = Number(prompt("Digite uma nota entre 0 e 10: "));\n    if (notaAluno < 0 || notaAluno > 10) {\n        console.log("Nota inválida! A nota deve estar entre 0 e 10.");\n    }\n} while (notaAluno < 0 || notaAluno > 10);\n\nconsole.log("Nota válida registrada com sucesso: " + notaAluno);`
    }
  ],
  arrays: [
    {
      id: "arr_01",
      num: "01",
      title: "Vetor de 10 Posições na Ordem Inversa",
      badge: "Vetores • Ordem Inversa",
      isDesafio: false,
      desc: "Armazena 10 números em um vetor e exibe na ordem inversa da digitação.",
      inputs: [
        { id: "vetor", label: "10 números (separados por vírgula)", type: "text", placeholder: "Ex: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10", default: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100" }
      ],
      run: (v) => {
        const nums = (v.vetor || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const invertido = [...nums].reverse();
        return {
          main: `Vetor invertido: <div class="items-grid-display">${invertido.map(n => `<span class="item-chip">${n}</span>`).join('')}</div>`,
          details: [
            { label: "Original", value: `[ ${nums.join(', ')} ]` },
            { label: "Invertido", value: `[ ${invertido.join(', ')} ]` },
            { label: "Tamanho", value: `${nums.length} itens` }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeros = [];\n\nconsole.log("Digite 10 números inteiros:");\nfor (let i = 0; i < 10; i++) {\n    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));\n    numeros.push(num);\n}\n\nconsole.log("\\nNúmeros na ordem inversa:");\nfor (let i = numeros.length - 1; i >= 0; i--) {\n    console.log(numeros[i]);\n}`
    },
    {
      id: "arr_02",
      num: "02",
      title: "Soma de 8 Elementos do Vetor",
      badge: "Vetores • Somatório",
      isDesafio: false,
      desc: "Armazena 8 números em um array e calcula a soma total de todos eles.",
      inputs: [
        { id: "vetor", label: "8 números (separados por vírgula)", type: "text", placeholder: "Ex: 5, 10, 15, 20, 25, 30, 35, 40", default: "5, 10, 15, 20, 25, 30, 35, 40" }
      ],
      run: (v) => {
        const nums = (v.vetor || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const soma = nums.reduce((a, b) => a + b, 0);
        return {
          main: `Soma dos 8 elementos: <span class="result-highlight">${soma}</span>`,
          details: [
            { label: "Array", value: `[ ${nums.join(', ')} ]` },
            { label: "Soma Total", value: soma }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeros = [];\nlet somaTotal = 0;\n\nconsole.log("Digite 8 números inteiros:");\nfor (let i = 0; i < 8; i++) {\n    let num = Number(prompt("Digite o número " + (i + 1) + ": "));\n    numeros.push(num);\n    somaTotal += num;\n}\n\nconsole.log("\\nElementos do vetor: [" + numeros.join(", ") + "]");\nconsole.log("Soma total dos 8 elementos: " + somaTotal);`
    },
    {
      id: "arr_03",
      num: "03",
      title: "Média de Notas da Turma (5 Alunos)",
      badge: "Vetores • Média",
      isDesafio: false,
      desc: "Calcula a média aritmética a partir de um array com notas de 5 estudantes.",
      inputs: [
        { id: "notas", label: "5 notas (separadas por vírgula)", type: "text", placeholder: "Ex: 7.5, 8.0, 6.5, 9.0, 8.0", default: "7.5, 8.0, 6.5, 9.0, 8.0" }
      ],
      run: (v) => {
        const notas = (v.notas || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const soma = notas.reduce((a, b) => a + b, 0);
        const media = notas.length > 0 ? soma / notas.length : 0;
        return {
          main: `Média final da turma: <span class="result-highlight">${media.toFixed(2)}</span>`,
          details: [
            { label: "Notas Digitadas", value: `[ ${notas.map(n => n.toFixed(1)).join(', ')} ]` },
            { label: "Média Geral", value: media.toFixed(2) }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet notas = [];\nlet somaNotas = 0;\n\nconsole.log("Digite as notas de 5 alunos:");\nfor (let i = 0; i < 5; i++) {\n    let nota = Number(prompt("Digite a nota do aluno " + (i + 1) + ": "));\n    notas.push(nota);\n    somaNotas += nota;\n}\n\nlet mediaFinal = somaNotas / 5;\nconsole.log("\\nNotas registradas: [" + notas.join(", ") + "]");\nconsole.log("Média final da turma: " + mediaFinal.toFixed(2));`
    },
    {
      id: "arr_04",
      num: "04",
      title: "Maior e Menor Valor no Vetor",
      badge: "Vetores • Extremos (Min/Max)",
      isDesafio: false,
      desc: "Encontra o maior e o menor elemento dentro de um array numérico.",
      inputs: [
        { id: "vetor", label: "10 números (separados por vírgula)", type: "text", placeholder: "Ex: 12, 85, 3, 44, 99, 21, 5, 67, 33, 1", default: "12, 85, 3, 44, 99, 21, 5, 67, 33, 1" }
      ],
      run: (v) => {
        const nums = (v.vetor || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        const maior = Math.max(...nums);
        const menor = Math.min(...nums);
        return {
          main: `Maior Valor: <span class="result-highlight">${maior}</span> | Menor Valor: <span class="result-highlight">${menor}</span>`,
          details: [
            { label: "Vetor Completo", value: `[ ${nums.join(', ')} ]` },
            { label: "Maior Elemento", value: maior },
            { label: "Menor Elemento", value: menor }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeros = [];\n\nconsole.log("Digite 10 números inteiros:");\nfor (let i = 0; i < 10; i++) {\n    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));\n    numeros.push(num);\n}\n\nlet maiorValor = numeros[0];\nlet menorValor = numeros[0];\n\nfor (let i = 1; i < numeros.length; i++) {\n    if (numeros[i] > maiorValor) maiorValor = numeros[i];\n    if (numeros[i] < menorValor) menorValor = numeros[i];\n}\n\nconsole.log("\\nMaior valor encontrado: " + maiorValor);\nconsole.log("Menor valor encontrado: " + menorValor);`
    },
    {
      id: "arr_05",
      num: "05",
      title: "Contagem de Pares e Ímpares no Vetor",
      badge: "Vetores • Contagem Condicional",
      isDesafio: false,
      desc: "Percorre o vetor e calcula a quantidade exata de números pares e de ímpares.",
      inputs: [
        { id: "vetor", label: "10 números (separados por vírgula)", type: "text", placeholder: "Ex: 2, 4, 7, 9, 10, 11, 14, 15, 18, 21", default: "2, 4, 7, 9, 10, 11, 14, 15, 18, 21" }
      ],
      run: (v) => {
        const nums = (v.vetor || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        let pares = nums.filter(n => n % 2 === 0);
        let impares = nums.filter(n => n % 2 !== 0);
        return {
          main: `Pares: <strong>${pares.length}</strong> | Ímpares: <strong>${impares.length}</strong>`,
          details: [
            { label: "Pares Encontrados", value: `[ ${pares.join(', ')} ]` },
            { label: "Ímpares Encontrados", value: `[ ${impares.join(', ')} ]` },
            { label: "Total de Elementos", value: nums.length }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeros = [];\nlet qtdPares = 0;\nlet qtdImpares = 0;\n\nconsole.log("Digite 10 números inteiros:");\nfor (let i = 0; i < 10; i++) {\n    let num = Number(prompt("Digite o número " + (i + 1) + ": "));\n    numeros.push(num);\n    if (num % 2 === 0) qtdPares++;\n    else qtdImpares++;\n}\n\nconsole.log("\\nTotal de números pares: " + qtdPares);\nconsole.log("Total de números ímpares: " + qtdImpares);`
    },
    {
      id: "arr_desafio",
      num: "⭐",
      title: "Desafio Ordenação Bubble Sort (Crescente)",
      badge: "Desafio • Algoritmo de Ordenação",
      isDesafio: true,
      desc: "Implementa o algoritmo Bubble Sort para ordenar os elementos do vetor em ordem crescente.",
      inputs: [
        { id: "vetor", label: "10 números desordenados (separados por vírgula)", type: "text", placeholder: "Ex: 64, 34, 25, 12, 22, 11, 90, 5, 77, 1", default: "64, 34, 25, 12, 22, 11, 90, 5, 77, 1" }
      ],
      run: (v) => {
        let nums = (v.vetor || "").split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
        let ordenado = [...nums];
        for (let i = 0; i < ordenado.length - 1; i++) {
          for (let j = i + 1; j < ordenado.length; j++) {
            if (ordenado[i] > ordenado[j]) {
              let aux = ordenado[i];
              ordenado[i] = ordenado[j];
              ordenado[j] = aux;
            }
          }
        }
        return {
          main: `Vetor ordenado (Bubble Sort):<div class="items-grid-display">${ordenado.map(n => `<span class="item-chip">${n}</span>`).join('')}</div>`,
          details: [
            { label: "Ordem Original", value: `[ ${nums.join(', ')} ]` },
            { label: "Ordem Crescente", value: `[ ${ordenado.join(', ')} ]` },
            { label: "Algoritmo", value: "Bubble Sort" }
          ]
        };
      },
      code: `var prompt = require('prompt-sync')();\n\nlet numeros = [];\n\nconsole.log("Digite 10 números para ordenar:");\nfor (let i = 0; i < 10; i++) {\n    let num = Number(prompt("Digite o número para a posição " + (i + 1) + ": "));\n    numeros.push(num);\n}\n\nfor (let i = 0; i < numeros.length - 1; i++) {\n    for (let j = i + 1; j < numeros.length; j++) {\n        if (numeros[i] > numeros[j]) {\n            let auxiliar = numeros[i];\n            numeros[i] = numeros[j];\n            numeros[j] = auxiliar;\n        }\n    }\n}\n\nconsole.log("Vetor ordenado em ordem crescente: [" + numeros.join(", ") + "]");`
    }
  ]
};

let currentCategory = "para";
let currentExIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderSidebar();
  loadExercise(0);
  setupAccordion();
});

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

  if (ex.inputs.length === 0) {
    formGrid.innerHTML = `<div style="color: var(--text-dim); font-size: 0.9rem; font-style: italic;">Este laço executa automaticamente de forma sequencial. Clique no botão abaixo para rodar.</div>`;
  } else {
    ex.inputs.forEach(input => {
      const group = document.createElement("div");
      group.className = "input-group";
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
      formGrid.appendChild(group);
    });
  }

  document.getElementById("codeSnippet").textContent = ex.code;
  executeCurrentExercise();
}

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

  resultBox.classList.add("has-result");
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

function clearCurrentInputs() {
  const ex = data[currentCategory][currentExIndex];
  ex.inputs.forEach(input => {
    const el = document.getElementById(input.id);
    if (el) el.value = "";
  });
  document.getElementById("resultContent").innerHTML = `<span style="color: var(--text-dim);">Aguardando execução...</span>`;
  document.getElementById("resultDetails").innerHTML = "";
  document.getElementById("resultBox").classList.remove("has-result");
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
