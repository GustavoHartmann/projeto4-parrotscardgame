let qtd = prompt("Com quantas cartas você deseja jogar?")

while(qtd % 2 !== 0 || qtd > 14 || qtd < 4) {
    qtd = prompt("Com quantas cartas você deseja jogar?")
}

let gifs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"]

const cartas = document.querySelector(".cards");

gifs.sort(comparador);

for(let i = 0; i < qtd; i++) {
    cartas.innerHTML += `
            <div class="card" onclick="virarCarta(this)">
                <img src="./IMG/front.png" class="verso">
                <img src="./IMG/${gifs[i]}parrot.gif" class="hide frente">
            </div>
    `
}

function comparador() { 
	return Math.random() - 0.5; 
}