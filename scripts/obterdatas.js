const anoAtual = new Date().getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

const ultimaModificacao = document.querySelector("#ultimaModificacao");

ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;