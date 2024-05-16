//array delle celle cosi da poter essere usato per selezionare la cella in base al numero random
const arrayNumeri = [];

//funzione che crea dei div con dentro un h3
const createcells = (nCells) => {
  const contenitoreCelle = document.getElementById("tombola");
  for (i = 0; i < nCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellContent = document.createElement("h3");
    cellContent.innerText = i + 1;
    cell.appendChild(cellContent);
    contenitoreCelle.appendChild(cell);
    arrayNumeri.push(cell);
  }
};
console.log(arrayNumeri);
window.addEventListener("DOMContentLoaded", () => {
  createcells(76);
});

// funzione che prende un numero random e seleziona la cella con lo stesso numero
const numeriRandom = []; // creo array dei numeri random che pusho dentro solo se non gia presenti
const randomNumber = () => {
  // si puo anche fare con do{...}while(condizione)
  // fai numero random finche il numero estranno e' presente dentro l'array. quando non e' presente esci
  // ed esegui il codice dopo
  //   do {
  //    const randomNumber = Math.round(Math.random() * 75);
  //   } while (numeriRandom.includes(randomNumber));
  const random = Math.round(Math.random() * 75);
  if (numeriRandom.includes(random)) {
    // se array numeriRandom include il numero random appena uscito, fai riparitre la funzione
    return randomNumber();
  } else {
    // altrimeti pusha dentro il nuovo numero random e usalo per aggiungere la classe selected alla cella
    console.log(random);
    numeriRandom.push(random);
    arrayNumeri[random].classList.add("selected");
  }
};
