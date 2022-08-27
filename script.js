const gridContainer = document.querySelector(".grid-container");
let cell = document.createElement("div");

let size = 16;

function makeDefaultGrid (size) {
    for (i=1; i<=size*size; i++) {
        cell = document.createElement("div");
        cell.style.borderStyle = "solid";
        cell.style.borderColor = "black";
        cell.style.border
        gridContainer.appendChild(cell);
    }
}

makeDefaultGrid(16);