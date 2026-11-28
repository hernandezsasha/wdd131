// Ultima modificacao
const ultimaModificacao = new Date(document.lastModified);
document.querySelector("#ultimaModificacao").textContent =
    "Última Modificação: " + ultimaModificacao.toLocaleString("pt-BR");

// Contador de avaliações
let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;

totalAvaliacoes++;

localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

document.querySelector("#contador").textContent = totalAvaliacoes;