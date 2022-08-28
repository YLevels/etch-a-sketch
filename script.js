const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
var output = document.querySelector(".size");
const hideGridButton = document.querySelector(".hide-grid");
const penButton = document.querySelector(".pen");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");



//clearButton.onclick = () => {cell.style.backgroundColor = "none"};
//eraserButton.addEventListener("click", eraseColor, false);
//eraserButton.onclick = () => eraseColor();

// hideGridButton.addEventListener("click", () => {
//     cell.style.borderColor="none";
// })

let cell = document.createElement("div");
let generatedCell = document.querySelectorAll(".cell");

let size = 16;
output.innerHTML = "16x16";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
        cell.addEventListener("mouseover", changeRainbowColor);
        cell.addEventListener("mousedown", changeRainbowColor);
        gridContainer.appendChild(cell);
    }
}

function removeGrid () {
    gridContainer.style.gridTemplateColumns = "none";
    gridContainer.style.gridTemplateRows = "none";
    gridContainer.innerHTML = "";
}

function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = "black";
}

function changeRainbowColor (e) {
    let randomRed = Math.floor(Math.random()*257);
    let randomBlue = Math.floor(Math.random()*257);
    let randomGreen = Math.floor(Math.random()*257);
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// function eraseColor (e) {
//     if (e.type === 'mouseover' && !mouseDown) return;
//     e.target.style.backgroundColor = "inherit";
// }

makeGrid(16);
//window.onload(makeGrid(16));