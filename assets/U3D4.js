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
const randomNumber = () => {
  const random = Math.round(Math.random() * 75);
  console.log(random);
  arrayNumeri[random].classList.add("selected");
};
