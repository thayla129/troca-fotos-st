"use strict";

const botaoTrocarImg = document.getElementById("trocar-fundo");
const body = document.getElementById("body");
const searchInput = document.getElementById("search");
let numero = 0; // Começa em st0

function trocarImg() {
    if (numero === 4) {
        numero = 0; // Volta para st0
    } else {
        numero++;
    }
    atualizarFundo(`st${numero}`);
}

function atualizarFundo(nomeImagem) {
    const urlImg = `url(./img/${nomeImagem}.jpg)`;
    console.log(`Imagem carregada: ${urlImg}`); // Depuração
    document.documentElement.style.setProperty("--fundo", urlImg);

    // Efeito de destaque ao trocar imagem
    body.style.opacity = "0.8";
    setTimeout(() => {
        body.style.opacity = "1";
    }, 300);
}

botaoTrocarImg.addEventListener("click", trocarImg);

searchInput.addEventListener("input", () => {
    const valor = searchInput.value.trim().toLowerCase(); // Remove espaços extras
    if (["st0", "st1", "st2", "st3", "st4"].includes(valor)) {
        atualizarFundo(valor);
    }
});


