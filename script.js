const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "VOCÊ ACHA QUE HÀ DESMATAMENTO NO BRASIL?",
        alternativas: [
            {
                texto: "Sim, há desmatamento no Brasil.",
                afirmacao: "A preservação de áreas verdes é um desafio contínuo devido à expansão agrícola e ao desenvolvimento urbano."
            },
            {
                texto: "Não, não há desmatamento no Brasil.",
                afirmacao: "Na verdade, o país tem conseguido preservar suas florestas e áreas naturais."
            }
        ]
    },
    {
        enunciado: "QUAL O MOTIVO DO DESMATAMENTO?",
        alternativas: [
            {
                texto: "O desmatamento é causado por várias razões!",
                afirmacao: "o desmatamento é causado por várias razões, incluindo a expansão da agricultura, a extração de madeira e a construção de infraestruturas, que contribuem para a perda de áreas florestais."
            },
            {
                texto: "Não há desmatamento no Brasil.",
                afirmacao: "Há deficiência no sistema de fiscalização."
            }
        ]
    },
    {
        enunciado: "PODEMOS DIMINIUR O DESMATAMENTO NO BRASIL?",
        alternativas: [
            {
                texto: "Sim, podemos diminuir o desmatamento no Brasil!",
                afirmacao: "Podemos diminuir o desmatamento no Brasil através da implementação de políticas mais rigorosas de proteção ambiental e incentivando práticas de manejo sustentável das florestas."
            },
            {
                texto: "Não podemos diminuir o desmatamento no Brasil!",
                afirmacao: "Por que é uma prática muito rara, e quase sem impacto!"
            }
        
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
