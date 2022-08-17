let qtdCartas;
let papagaios = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];
let papagaiosEmbaralhados = [];

 function perguntarQuantidadeCartas() {
     qtdCartas = Number(prompt("Com quantas cartas você quer jogar?"))
     if(qtdCartas % 2 === 0 && qtdCartas >= 4 && qtdCartas <= 14) {
         distribuirCartas();
     } else {
         perguntarQuantidadeCartas();
     }
 }

 perguntarQuantidadeCartas();

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
         <div class="carta">
            <img src="img/front.png" alt="frente">
            <img src="img/${papagaiosEmbaralhados[i]}parrot.gif" alt="verso" class="hide">
        </div>
         `
     }
  }