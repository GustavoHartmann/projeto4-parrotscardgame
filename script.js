let qtdCartas = 0;
let papagaios = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];
let papagaiosEmbaralhados = [];
let cartasViradas = [];
let cartasClicadas = [];
let contadorCliques = 0;
let contadorAcertos = 0;
let relogio = 0;

 function perguntarQuantidadeCartas() {
     qtdCartas = Number(prompt("Com quantas cartas você quer jogar?"))
     if(qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14) {
         distribuirCartas();
     } else {
         perguntarQuantidadeCartas();
     }
 }

 perguntarQuantidadeCartas();

 const idInterval = setInterval(contarTempo, 1000);

 function comparador() { 
	return Math.random() - 0.5; 
}

function embaralharCartas() {
    for(let i = 0; i < qtdCartas; i++) {
    papagaiosEmbaralhados.push(papagaios[i])
    }
    papagaiosEmbaralhados.sort(comparador);
}

  function distribuirCartas() {
    embaralharCartas();
     const cartas = document.querySelector(".cartas");
     papagaiosEmbaralhados.sort(comparador);
     for(let i = 0; i < qtdCartas; i++) {
         cartas.innerHTML += `
         <div class="carta" onclick="virarCarta(this)">
            <img src="./img/front.png" alt="frente">
            <img src="./img/${papagaiosEmbaralhados[i]}parrot.gif" alt="verso" class="escondido">
        </div>
         `
     }
  }

  function virarCarta(carta) {
    const frente = carta.children[0];
    const verso = carta.children[1];
    frente.classList.add("escondido");
    verso.classList.remove("escondido");
    carta.classList.add("virada");
    cartasViradas.push(verso.src);
    cartasClicadas.push(carta);
    bloquearCarta(carta);
    checarCartas();
    contadorCliques++;
}

function checarCartas() {
    if(cartasViradas.length === 2) {
        gerarBloqueador();
        if(cartasViradas[0] !== cartasViradas[1]) {
            setTimeout(desvirarCarta, 1000);
            desbloquearCarta();
        } else {
            contadorAcertos++;
            cartasViradas = [];
            cartasClicadas = [];
            removerBloqueador();
            setTimeout(finalizarJogo, 500);
        }
        
    }
}

function desvirarCarta() {
    const listaCartas = document.querySelectorAll(".carta");
    for (let i = 0; i < listaCartas.length; i++) {
        if(listaCartas[i].children[1].src === cartasViradas[0]) {
            listaCartas[i].classList.remove("virada");
            listaCartas[i].children[0].classList.remove("escondido");
            listaCartas[i].children[1].classList.add("escondido");
        } else if(listaCartas[i].children[1].src === cartasViradas[1]) {
            listaCartas[i].classList.remove("virada");
            listaCartas[i].children[0].classList.remove("escondido");
            listaCartas[i].children[1].classList.add("escondido");
        }
    }
    cartasViradas = [];
    removerBloqueador();
}

function bloquearCarta(carta) {
    carta.removeAttribute("onclick");
}

function desbloquearCarta() {
    cartasClicadas[0].setAttribute("onclick", "virarCarta(this)");
    cartasClicadas[1].setAttribute("onclick", "virarCarta(this)");
    cartasClicadas = [];
}

function finalizarJogo() {
    if(contadorAcertos === qtdCartas / 2) {
        clearInterval(idInterval);
        alert(`Você ganhou em ${contadorCliques} jogadas e ${relogio} segundos!`);
        reiniciarPartida();
    }
}

function gerarBloqueador() {
    const bloqueador = document.querySelector(".cartas :nth-child(1)");
    bloqueador.classList.add("bloqueador");
}

function removerBloqueador() {
    const bloqueador = document.querySelector(".cartas :nth-child(1)");
    bloqueador.classList.remove("bloqueador");
}

function contarTempo() {
    relogio++;
    document.querySelector(".relogio").innerHTML = `${relogio}s`
}

function reiniciarPartida() {
    let resposta = prompt('você gostaria de reiniciar a partida? ("sim" ou "não")');
    if(resposta === "sim") {
        window.location.reload();
    } else if(resposta !== "não") {
        reiniciarPartida();
    }
}