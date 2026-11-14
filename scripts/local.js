// Ano atual
const anoAtual = new Date().getFullYear();
document.querySelector("#current-year").textContent = anoAtual;

// Ultima modificacao
const ultimaModificacao = new Date(document.lastModified);
document.querySelector("#ultimaModificacao").textContent =
    ultimaModificacao.toLocaleString("pt-BR");

// Dados do clima
const temperatura = 1;
const velocidadeVento = 6.8;

// Funcao para calcular a sensacao termica
function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) -
        (11.37 * Math.pow(velocidadeVento, 0.16)) +
        (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}

// Verificar se o calculo pode ser realizado
let resultado;

if (temperatura <= 10 && velocidadeVento > 4.8) {
    resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
    resultado = Math.round(resultado) + " °C";
} else {
    resultado = "N/A";
}

// Mostrar o resultado na pagina
document.querySelector("#sensacao-termica").textContent = resultado;