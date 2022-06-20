let contador = 0;
let name1;
let name2;
let qtd = prompt("Com quantas cartas você deseja jogar?");

while(qtd % 2 !== 0 || qtd > 14 || qtd < 4) {
    qtd = prompt("Com quantas cartas você deseja jogar?");
}

let gifs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];

let randomGifs = [];

for(let i = 0; i < qtd; i++) {
    randomGifs.push(gifs[i]);
}

randomGifs.sort(comparador);

for(let i = 0; i < qtd; i++) {
    document.querySelector(".cards").innerHTML += `
            <div class="card" onclick="virarCarta(this)">
                <img src="./IMG/${randomGifs[i]}parrot.gif" class="hide frente">
                <img src="./IMG/front.png" class="verso">
            </div>
    `
}

function comparador() { 
	return Math.random() - 0.5;
}

function virarCarta(element) {
    element.classList.add("turn")
    const verso = element.querySelector(".verso");
    const frente = element.querySelector(".frente");
    if(frente.classList.contains("hide")){
        verso.classList.add("hide");
        frente.classList.remove("hide");
    }
     
    contadorCarta(element);
    setTimeout(desvirarCarta(element), 1000)
}

function contadorCarta(elemento) {
    contador++;
    if(contador === 1) {
        name1 = elemento.querySelector("img").src
    } else if(contador === 2) {
        name2 = elemento.querySelector("img").src
    } else {
        contador = 0;
    }
    
}

function desvirarCarta(elemento) {
    const verso = elemento.querySelector(".verso")
    const frente = elemento.querySelector(".frente")
    if(name1 !== name2) {
        verso.classList.add("hide")
        frente.classList.remove("hide")
    }
    
}