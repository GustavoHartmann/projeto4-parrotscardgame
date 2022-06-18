let qtd = prompt("Com quantas cartas você deseja jogar?")

while(qtd % 2 !== 0 || qtd > 14 || qtd < 4) {
    qtd = prompt("Com quantas cartas você deseja jogar?")
}

let gifs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"]

let randomGifs = [];

for(let i = 0; i < qtd; i++) {
    randomGifs.push(gifs[i]);
}

randomGifs.sort(comparador);

for(let i = 0; i < qtd; i++) {
    document.querySelector(".cards").innerHTML += `
            <div class="card" onclick="virarCarta(this)">
                <img src="./IMG/${randomGifs[i]}parrot.gif" class="frente">
            </div>
    `
}

function comparador() { 
	return Math.random() - 0.5;
}