const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
let output = document.querySelector(".size");
const hideGridButton = document.querySelector(".hide-grid");
const penButton = document.querySelector(".pen");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

penButton.addEventListener("click", () => {
    currentColor = "black";
})
rainbowButton.addEventListener("click", () => {
    currentColor = "rainbow";
})
eraserButton.addEventListener("click", () => {
    currentColor = "eraser";
})

let cell = document.createElement("div");
let generatedCell = document.querySelectorAll(".cell");

let size = 16;
output.innerHTML = "16x16";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentMode = "pen";
let currentColor = "black";

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
        cell.addEventListener("mouseover", setColor);
        cell.addEventListener("mousedown", setColor);
        gridContainer.appendChild(cell);
    }
}

function removeGrid () {
    gridContainer.style.gridTemplateColumns = "none";
    gridContainer.style.gridTemplateRows = "none";
    gridContainer.innerHTML = "";
}

function setColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentColor === "rainbow") {
        let randomRed = Math.floor(Math.random()*257);
        let randomBlue = Math.floor(Math.random()*257);
        let randomGreen = Math.floor(Math.random()*257);
        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
    else if (currentColor === "eraser") {
        e.target.style.backgroundColor = "lightgray";
    }
    else if (currentColor === "black") {
    e.target.style.backgroundColor = currentColor;
    }
}

makeGrid(16);