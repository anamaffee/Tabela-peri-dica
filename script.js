    
// monta a tabela
const divElemento = document.createElement("div");
divElemento.classList.add("card-elemento");

// LAÇO DE REPETIÇÃO PARA PERCORRER O ARRAY colecaoElementos E CONSTRUIR OS ELEMENTOS
colecaoElementos.forEach((item) => {

    const divElemento = document.createElement("div");
    divElemento.classList.add("card-elemento");

    divElemento.innerText = item.simbolo;
    divElemento.style.gridRow = item.linha;
    divElemento.style.gridColumn = item.coluna;
    divElemento.style.backgroundColor = item.corGrupo;
    // add evento
    divElemento.onmouseenter = function () {
        abrirModal(item);
    };

    const container = document.getElementById("tabela-periodica");
    container.appendChild(divElemento);

});
//fim

// funcoes da modal
function abrirModal(elemento) { 

  const modal = document.getElementById("modal");
  const titulo = document.getElementById("modal-nome");
  const info = document.getElementById("modal-info");

  titulo.textContent = elemento.nome;
  info.textContent = `Símbolo: ${elemento.simbolo} Massa: ${elemento.massaAtomica} Grupo: ${elemento.grupo}`;
   modal.style.display = "flex";
}
function fecharmodal () {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}


// Array dos familias/legendas
const legenda = [
    { nome: "Não metais", cor: "#8cc63f" },
    { nome: "Gases nobres", cor: "#3498db" },
    { nome: "Metais alcalinos", cor: "#d4a000" },
    { nome: "Metais alcalino-terrosos", cor: "#d4d000" },
    { nome: "Semimetais", cor: "#4aa89b" },
    { nome: "Halogênios", cor: "#69c7e8" },
    { nome: "Outros metais", cor: "#a8c7d1" },
    { nome: "Metais de transição", cor: "#e78b8b" },
    { nome: "Lantanídeos", cor: "#7ed0d8" },
    { nome: "Actinídios", cor: "#c79ac7" }
];


// monta a legenda da tabela
const conteudoLegenda = document.getElementById("legenda");
legenda.forEach(item => {

    const bloco = document.createElement("div");
    bloco.style.display = "flex";
    bloco.style.alignItems = "center";
    bloco.style.margin = "10px";
    bloco.style.gap = "8px";

    const cor = document.createElement("div");
    cor.style.width = "25px";
    cor.style.height = "25px";
    cor.style.backgroundColor = item.cor;
    const texto = document.createElement("span");
    texto.textContent = item.nome;

    bloco.appendChild(cor);
    bloco.appendChild(texto);
    conteudoLegenda.appendChild(bloco);
});

   
 
