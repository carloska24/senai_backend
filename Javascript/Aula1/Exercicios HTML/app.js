// Dados e lógica de todos os 10 exercícios da Aula 1
const exercises = [
  {
    id: "ex01",
    num: "01",
    title: "Olá Mundo",
    badge: "Exercício 01 • Sequencial",
    isDesafio: false,
    desc: "Exibe uma mensagem inicial de boas-vindas no console.",
    inputs: [],
    run: () => {
      return {
        main: "Ola mundo!",
        details: [
          { label: "Status", value: "Executado com sucesso" },
          { label: "Saída", value: "Texto simples no console" }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Exibe a mensagem de boas-vindas na tela\nconsole.log("Ola mundo!");`
  },
  {
    id: "ex02",
    num: "02",
    title: "Soma de Dois Números",
    badge: "Exercício 02 • Operações",
    isDesafio: false,
    desc: "Lê dois números e calcula a soma aritmética entre eles.",
    inputs: [
      { id: "n1", label: "Primeiro Número", type: "number", placeholder: "Ex: 10", default: 15 },
      { id: "n2", label: "Segundo Número", type: "number", placeholder: "Ex: 25", default: 25 }
    ],
    run: (vals) => {
      const n1 = Number(vals.n1) || 0;
      const n2 = Number(vals.n2) || 0;
      const total = n1 + n2;
      return {
        main: `A soma de ${n1} + ${n2} é igual a: <span class="result-highlight">${total}</span>`,
        details: [
          { label: "Parcela 1", value: n1 },
          { label: "Parcela 2", value: n2 },
          { label: "Total da Soma", value: total }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: lê os dois números informados pelo usuário\nlet numero1 = Number(prompt("Digite o primeiro número: "));\nlet numero2 = Number(prompt("Digite o segundo número: "));\n\n// Processamento: calcula a soma entre eles\nlet total = numero1 + numero2;\n\n// Saída de dados: exibe o resultado final da soma\nconsole.log("A soma dos dois números é: " + total);`
  },
  {
    id: "ex03",
    num: "03",
    title: "Média de Duas Notas",
    badge: "Exercício 03 • Médias",
    isDesafio: false,
    desc: "Lê as notas de um estudante e calcula a média aritmética simples.",
    inputs: [
      { id: "nota1", label: "Primeira Nota (0 a 10)", type: "number", placeholder: "Ex: 8.5", default: 7.5 },
      { id: "nota2", label: "Segunda Nota (0 a 10)", type: "number", placeholder: "Ex: 9.0", default: 8.5 }
    ],
    run: (vals) => {
      const nota1 = Number(vals.nota1) || 0;
      const nota2 = Number(vals.nota2) || 0;
      const media = (nota1 + nota2) / 2;
      const status = media >= 7 ? "Aprovado(a) 🚀" : (media >= 5 ? "Recuperação ⚠️" : "Reprovado(a) ❌");
      return {
        main: `A média final é: <span class="result-highlight">${media.toFixed(2)}</span> (${status})`,
        details: [
          { label: "Nota 1", value: nota1.toFixed(1) },
          { label: "Nota 2", value: nota2.toFixed(1) },
          { label: "Média Final", value: media.toFixed(2) }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita as duas notas\nlet nota1 = Number(prompt("Digite a primeira nota: "));\nlet nota2 = Number(prompt("Digite a segunda nota: "));\n\n// Processamento: calcula a média aritmética das notas\nlet media = (nota1 + nota2) / 2;\n\n// Saída de dados: exibe a média calculada\nconsole.log("A média entre as duas notas é: " + media);`
  },
  {
    id: "ex04",
    num: "04",
    title: "Dobro de um Número",
    badge: "Exercício 04 • Multiplicação",
    isDesafio: false,
    desc: "Calcula e exibe o valor duplicado (multiplicado por 2) do número informado.",
    inputs: [
      { id: "numero", label: "Digite um número", type: "number", placeholder: "Ex: 42", default: 12 }
    ],
    run: (vals) => {
      const num = Number(vals.numero) || 0;
      const dobro = num * 2;
      return {
        main: `O dobro de ${num} é: <span class="result-highlight">${dobro}</span>`,
        details: [
          { label: "Número Base", value: num },
          { label: "Multiplicador", value: "x2" },
          { label: "Resultado (Dobro)", value: dobro }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita um número para calcular o dobro\nlet numero = Number(prompt("Digite o número! Vamos calcular o dobro desse número: "));\n\n// Processamento: calcula o dobro do número digitado\nlet dobro = numero * 2;\n\n// Saída de dados: exibe o resultado\nconsole.log("O dobro do número digitado é: " + dobro);`
  },
  {
    id: "ex05",
    num: "05",
    title: "Área do Retângulo",
    badge: "Exercício 05 • Geometria",
    isDesafio: false,
    desc: "Calcula a área de uma superfície retangular multiplicando a base pela altura.",
    inputs: [
      { id: "base", label: "Base (m)", type: "number", placeholder: "Ex: 8", default: 10 },
      { id: "altura", label: "Altura (m)", type: "number", placeholder: "Ex: 5", default: 4 }
    ],
    run: (vals) => {
      const b = Number(vals.base) || 0;
      const h = Number(vals.altura) || 0;
      const area = b * h;
      return {
        main: `A área total do retângulo é: <span class="result-highlight">${area} m²</span>`,
        details: [
          { label: "Comprimento da Base", value: `${b} m` },
          { label: "Altura", value: `${h} m` },
          { label: "Área Total", value: `${area} m²` }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a base e a altura do retângulo\nlet base = Number(prompt("Digite a base: "));\nlet altura = Number(prompt("Digite a altura: "));\n\n// Processamento: calcula a área do retângulo (base * altura)\nlet area = base * altura;\n\n// Saída de dados: exibe a área calculada\nconsole.log("A área do retângulo é: " + area);`
  },
  {
    id: "ex06",
    num: "06",
    title: "Calculadora de Idade em Dias",
    badge: "Exercício 06 • Conversão",
    isDesafio: false,
    desc: "Converte uma idade em anos para a quantidade aproximada de dias de vida (base: 365 dias/ano).",
    inputs: [
      { id: "idade", label: "Sua idade (em anos)", type: "number", placeholder: "Ex: 18", default: 20 }
    ],
    run: (vals) => {
      const idade = Number(vals.idade) || 0;
      const dias = idade * 365;
      return {
        main: `Com ${idade} anos, você já viveu aproximadamente: <span class="result-highlight">${dias.toLocaleString('pt-BR')} dias</span>! 🎉`,
        details: [
          { label: "Idade em Anos", value: `${idade} anos` },
          { label: "Dias por Ano", value: "365 dias" },
          { label: "Total em Dias", value: `${dias.toLocaleString('pt-BR')} dias` }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a idade do usuário\nlet idade = Number(prompt("Digite sua idade: "));\n\n// Processamento: calcula os dias de vida aproximados\nlet calculaIdade = idade * 365;\n\n// Saída de dados: exibe a quantidade total de dias\nconsole.log("Você tem " + calculaIdade + " dias de vida!");`
  },
  {
    id: "ex07",
    num: "07",
    title: "Antecessor de um Número",
    badge: "Exercício 07 • Subtração",
    isDesafio: false,
    desc: "Lê um número inteiro e exibe imediatamente o seu antecessor numérico (número - 1).",
    inputs: [
      { id: "numero", label: "Digite um número inteiro", type: "number", placeholder: "Ex: 100", default: 50 }
    ],
    run: (vals) => {
      const num = Number(vals.numero) || 0;
      const antecessor = num - 1;
      return {
        main: `O antecessor de ${num} é: <span class="result-highlight">${antecessor}</span>`,
        details: [
          { label: "Número Informado", value: num },
          { label: "Operação", value: "- 1" },
          { label: "Antecessor", value: antecessor }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita um número ao usuário\nlet numero = Number(prompt("Digite o número: "));\n\n// Processamento: calcula o antecessor subtraindo 1\nlet antecessor = numero - 1;\n\n// Saída de dados: exibe o valor do antecessor\nconsole.log("O antecessor é: " + antecessor);`
  },
  {
    id: "ex08",
    num: "08",
    title: "Conversor Celsius para Fahrenheit",
    badge: "Exercício 08 • Fórmulas",
    isDesafio: false,
    desc: "Converte uma temperatura em graus Celsius (°C) para Fahrenheit (°F).",
    inputs: [
      { id: "celsius", label: "Temperatura em Celsius (°C)", type: "number", placeholder: "Ex: 25", default: 30 }
    ],
    run: (vals) => {
      const c = Number(vals.celsius) || 0;
      const f = c * (9 / 5) + 32;
      return {
        main: `${c}°C equivale a: <span class="result-highlight">${f.toFixed(1)}°F</span>`,
        details: [
          { label: "Graus Celsius", value: `${c} °C` },
          { label: "Fórmula", value: "(C × 9/5) + 32" },
          { label: "Graus Fahrenheit", value: `${f.toFixed(1)} °F` }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: solicita a temperatura em graus Celsius\nlet grausCelsius = Number(prompt("Digite a temperatura em graus celsius: "));\n\n// Processamento: converte a temperatura de Celsius para Fahrenheit\nlet fahrenheit = grausCelsius * (9 / 5) + 32;\n\n// Saída de dados: exibe a temperatura em Fahrenheit\nconsole.log("A temperatura em Fahrenheit é: " + fahrenheit);`
  },
  {
    id: "desafio1",
    num: "⭐",
    title: "Desafio 01 - Carrinho de Compras",
    badge: "Desafio 01 • Caixa & Troco",
    isDesafio: true,
    desc: "Simula o checkout de uma compra com produto, quantidade, total, valor pago e cálculo de troco.",
    inputs: [
      { id: "produto", label: "Nome do Produto", type: "text", placeholder: "Ex: Teclado Mecânico", default: "Mouse Gamer" },
      { id: "quantidade", label: "Quantidade", type: "number", placeholder: "Ex: 2", default: 2 },
      { id: "preco", label: "Preço Unitário (R$)", type: "number", placeholder: "Ex: 120.00", default: 75.50 },
      { id: "valorPago", label: "Valor Pago pelo Cliente (R$)", type: "number", placeholder: "Ex: 200.00", default: 200.00 }
    ],
    run: (vals) => {
      const prod = vals.produto || "Item";
      const qtd = Number(vals.quantidade) || 0;
      const preco = Number(vals.preco) || 0;
      const valorPago = Number(vals.valorPago) || 0;
      const total = preco * qtd;
      const troco = valorPago - total;
      const statusTroco = troco >= 0 ? `Troco: R$ ${troco.toFixed(2)}` : `Faltam: R$ ${Math.abs(troco).toFixed(2)}`;

      return {
        main: `Compra de <strong>${qtd}x ${prod}</strong>: Total <span class="result-highlight">R$ ${total.toFixed(2)}</span> | ${statusTroco}`,
        details: [
          { label: "Item / Produto", value: prod },
          { label: "Qtd x Preço", value: `${qtd}x R$ ${preco.toFixed(2)}` },
          { label: "Total da Compra", value: `R$ ${total.toFixed(2)}` },
          { label: "Valor Recebido", value: `R$ ${valorPago.toFixed(2)}` },
          { label: "Troco a Devolver", value: `R$ ${troco.toFixed(2)}` }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: dados do produto\nlet produto = prompt("Digite o nome do produto: ");\nlet quantidade = Number(prompt("Digite a quantidade: "));\nlet preco = Number(prompt("Digite o valor do produto: "));\n\n// Processamento: calcula o valor total da compra\nlet totalCompra = preco * quantidade;\nconsole.log("O total da compra é: " + totalCompra);\n\n// Entrada de dados: valor pago pelo cliente\nlet valorPago = Number(prompt("Digite o valor pago: "));\n\n// Processamento: calcula o troco\nlet troco = valorPago - totalCompra;\n\n// Saída de dados: exibe valor pago e o troco\nconsole.log("O valor pago foi: " + valorPago);\nconsole.log("O troco é: " + troco);`
  },
  {
    id: "desafio2",
    num: "⭐",
    title: "Desafio 02 - Folha de Pagamento",
    badge: "Desafio 02 • Holerite",
    isDesafio: true,
    desc: "Calcula o salário bruto, as deduções legais (INSS 8%, IR 11%, Sindicato 5%) e o salário líquido final.",
    inputs: [
      { id: "valorHora", label: "Valor ganho por Hora (R$)", type: "number", placeholder: "Ex: 35.00", default: 45.00 },
      { id: "horasTrabalhadas", label: "Horas trabalhadas no mês", type: "number", placeholder: "Ex: 160", default: 160 }
    ],
    run: (vals) => {
      const vHora = Number(vals.valorHora) || 0;
      const horas = Number(vals.horasTrabalhadas) || 0;
      const bruto = vHora * horas;
      const inss = bruto * 0.08;
      const imposto = bruto * 0.11;
      const sindicato = bruto * 0.05;
      const totalDescontos = inss + imposto + sindicato;
      const liquido = bruto - totalDescontos;

      return {
        main: `Salário Líquido: <span class="result-highlight">R$ ${liquido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> (Bruto: R$ ${bruto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})`,
        details: [
          { label: "Salário Bruto", value: `R$ ${bruto.toFixed(2)}` },
          { label: "INSS (8%)", value: `- R$ ${inss.toFixed(2)}` },
          { label: "Imposto de Renda (11%)", value: `- R$ ${imposto.toFixed(2)}` },
          { label: "Sindicato (5%)", value: `- R$ ${sindicato.toFixed(2)}` },
          { label: "Total Descontos (24%)", value: `- R$ ${totalDescontos.toFixed(2)}` },
          { label: "Salário Líquido", value: `R$ ${liquido.toFixed(2)}` }
        ]
      };
    },
    code: `var prompt = require('prompt-sync')();\n\n// Entrada de dados: valor da hora e quantidade de horas trabalhadas\nlet valorHora = Number(prompt("Digite quanto você ganha por hora: "));\nlet horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas: "));\n\n// Processamento: calcula o salário bruto\nlet salarioBruto = horasTrabalhadas * valorHora;\n\n// Processamento: calcula as deduções (INSS, IR e Sindicato)\nlet inss = salarioBruto * 0.08;\nlet imposto = salarioBruto * 0.11;\nlet sindicato = salarioBruto * 0.05;\n\n// Processamento: calcula o salário líquido\nlet salarioLiquido = salarioBruto - inss - sindicato;\n\n// Saída de dados: exibe os resultados na tela\nconsole.log("salário bruto = " + salarioBruto);\nconsole.log("quanto pagou ao INSS? " + inss);\nconsole.log("quanto pagou ao sindicato? " + sindicato);\nconsole.log("o salário líquido é: " + salarioLiquido);`
  }
];

// Estado da Aplicação
let currentExIndex = 0;

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  loadExercise(0);
  setupAccordion();
});

// Renderiza a lista na Sidebar
function renderSidebar() {
  const nav = document.getElementById("exerciseNav");
  nav.innerHTML = "";

  exercises.forEach((ex, index) => {
    const btn = document.createElement("button");
    btn.className = `exercise-btn ${ex.isDesafio ? "is-desafio" : ""} ${index === currentExIndex ? "active" : ""}`;
    btn.onclick = () => loadExercise(index);

    btn.innerHTML = `
      <div class="exercise-num">${ex.num}</div>
      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${ex.title}</span>
    `;

    nav.appendChild(btn);
  });
}

// Carrega o exercício selecionado na tela
function loadExercise(index) {
  currentExIndex = index;
  const ex = exercises[index];

  // Atualiza botões ativos na barra lateral
  const buttons = document.querySelectorAll(".exercise-btn");
  buttons.forEach((b, i) => {
    b.classList.toggle("active", i === index);
  });

  // Atualiza Cabeçalho do Card
  const badgeEl = document.getElementById("exBadge");
  badgeEl.textContent = ex.badge;
  badgeEl.className = `exercise-badge ${ex.isDesafio ? "desafio" : ""}`;

  document.getElementById("exTitle").textContent = ex.title;
  document.getElementById("exDesc").textContent = ex.desc;

  // Renderiza Inputs
  const formGrid = document.getElementById("formGrid");
  formGrid.innerHTML = "";

  if (ex.inputs.length === 0) {
    formGrid.innerHTML = `<div style="color: var(--text-dim); font-size: 0.9rem; font-style: italic;">Este programa não requer parâmetros de entrada. Clique no botão abaixo para executar.</div>`;
  } else {
    ex.inputs.forEach((input) => {
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

  // Atualiza o bloco de código
  document.getElementById("codeSnippet").textContent = ex.code;

  // Reseta resultado e executa automaticamente com valores padrão
  executeCurrentExercise();
}

// Executa o exercício ativo e renderiza a saída
function executeCurrentExercise() {
  const ex = exercises[currentExIndex];
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

  // Renderiza detalhes em cards pequenos
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

// Limpa os campos do formulário
function clearCurrentInputs() {
  const ex = exercises[currentExIndex];
  ex.inputs.forEach(input => {
    const el = document.getElementById(input.id);
    if (el) el.value = "";
  });
  document.getElementById("resultContent").innerHTML = `<span style="color: var(--text-dim);">Aguardando execução...</span>`;
  document.getElementById("resultDetails").innerHTML = "";
  document.getElementById("resultBox").classList.remove("has-result");
}

// Configura o acordeão para exibir o código
function setupAccordion() {
  const header = document.getElementById("codeHeader");
  const section = document.getElementById("codeSection");
  header.addEventListener("click", () => {
    section.classList.toggle("open");
  });
}

// Copiar código para a área de transferência
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
