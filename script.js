const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
var output = document.querySelector(".size");

let cell = document.createElement("div");
let generatedCell = document.querySelectorAll(".cell");

let size = 16;
output.innerHTML = "16x16";

slider.oninput = function () {
    output.innerHTML = `${this.value + "x" + this.value}`;
    removeGrid();
    makeGrid(this.value);
}

function makeGrid (size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i=1; i<=size*size; i++) {
        cell = document.createElement("div");
        cell.style.borderStyle = "solid";
        cell.style.borderColor = "black";
        cell.style.borderWidth = "thin";
        cell.addEventListener("mousedown", changeColor);
        gridContainer.appendChild(cell);
    }
}

function removeGrid () {
    gridContainer.style.gridTemplateColumns = "none";
    gridContainer.style.gridTemplateRows = "none";
    gridContainer.innerHTML = "";
}

function changeColor (e) {
    e.target.style.backgroundColor = "black";
}

makeGrid(16);