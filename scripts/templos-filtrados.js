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

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "imagens/templo-aba-nigeria.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "imagens/templo-manti-utah.jpg"
            
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "imagens/templo-payson-utah.jpg"
    },
           
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "imagens/templo-yigo-guam.jpg"
    },
            
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "imagens/templo-washington-d.c.jpg"
            
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "imagens/templo-lima-peru.jpg"
           
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "imagens/templo-cidade-de-mexico.jpg"
    },   
    {
        nomeDoTemplo: "Roma Itália, Roma",
        localizacao: "Roma Itália, Roma",
        consagracao: "2019, 10 de março",
        area: 41010,
        urlDaImagem: "imagens/templo-roma-italia.jpg"
    },      
    {
        nomeDoTemplo: "Caracas Venezuela, Venezuela",
        localizacao: "Caracas Venezuela, Venezuela",
        consagracao: "2000, 20 de agosto",
        area: 15332,
        urlDaImagem: "imagens/templo-caracas-venezuela.jpg"
    },   
    {
        nomeDoTemplo: "Curitiba Brasil, Brasil",
        localizacao: "Curitiba Paraná, Brasil",
        consagracao: "2008, 1 de junho",
        area: 27850,
        urlDaImagem: "imagens/templo-curitiba-brasil.jpg"
    }
        
];

const contenedor = document.querySelector("#contenedorTemplos");
const linksMenu = document.querySelectorAll("nav a");

function mostrarTemplos(listaTemplos) {

    contenedor.innerHTML = "";

    listaTemplos.forEach(templo => {
        const tarjeta = document.createElement("section");

        const nome = document.createElement("h2");
        nome.textContent = templo.nomeDoTemplo;
        tarjeta.appendChild(nome);

        const localizacao = document.createElement("p");
        localizacao.textContent = "LOCALIZAÇÃO: " + templo.localizacao;
        tarjeta.appendChild(localizacao);

        const consagracao = document.createElement("p");
        consagracao.textContent = "DEDICADO: " + templo.consagracao;
        tarjeta.appendChild(consagracao);

        const area = document.createElement("p");
        area.textContent = "TAMANHO: " + templo.area + " sq ft";
        tarjeta.appendChild(area);

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.width = 400;
        imagem.height = 250;
        imagem.loading = "lazy";
        tarjeta.appendChild(imagem);

        contenedor.appendChild(tarjeta);
    });
}

linksMenu.forEach(link => {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();

        const filtro = link.dataset.filter;
        let templosFiltrados = [];

        if (filtro === "todos") {
            templosFiltrados = templos;
        }

        else if (filtro === "antigos") {
            templosFiltrados = templos.filter(templo => {
                const ano = Number(templo.consagracao.split(",")[0]);
                return ano < 1900;
            });
        }

        else if (filtro === "novos") {
            templosFiltrados = templos.filter(templo => {
                const ano = Number(templo.consagracao.split(",")[0]);
                return ano > 2000;
            });
        }

        else if (filtro === "grandes") {
            templosFiltrados = templos.filter(templo => templo.area > 90000);
        }

        else if (filtro === "pequenos") {
            templosFiltrados = templos.filter(templo => templo.area < 10000);
        }

        mostrarTemplos(templosFiltrados);
    });
});

mostrarTemplos(templos);