const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector("nav");
botaoMenu.addEventListener("click", function () {
    navegacao.classList.toggle("open");
    botaoMenu.textContent = navegacao.classList.contains("open") ? "X" : "☰";

});

const anoAtual = new Date().getFullYear();
document.querySelector("#anoatual").textContent = anoAtual;
const ultimaModificacao = document.lastModified;
document.querySelector("#ultimaModificacao").textContent = ultimaModificacao;