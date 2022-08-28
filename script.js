const gridContainer = document.querySelector(".grid-container");
var slider = document.querySelector(".slider");
var output = document.querySelector(".size");

let cell = document.createElement("div");

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
        gridContainer.appendChild(cell);
    }
}

function removeGrid () {
    gridContainer.style.gridTemplateColumns = "none";
    gridContainer.style.gridTemplateRows = "none";
    gridContainer.innerHTML = "";

}

makeGrid(16);