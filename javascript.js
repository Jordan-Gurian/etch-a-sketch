const container = document.querySelector('.container');

let gridHeight = 16;
let gridWidth = 16;
const DIV_BORDER_WIDTH = 1;
const DEFAULT_BODY_MARGIN = 8;

document.onload = setGrid(gridHeight, gridWidth, DIV_BORDER_WIDTH, DEFAULT_BODY_MARGIN);


function setGrid(gridHeight, gridWidth, borderWidth, bodyMargin) {
    let windowWidth = window.innerWidth;
    let containerWidth = windowWidth - ( 2 * bodyMargin );

    container.style.maxWidth = containerWidth + 'px';
    container.style.minWidth = containerWidth + 'px';
    let divWidth = containerWidth / gridWidth;

    for (let i = 0; i < gridHeight; i++) {
        for (let j = 0; j < gridWidth; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('pixels');
            newDiv.style.padding = (divWidth - ( 2 * borderWidth ) ) / 2 + "px";
            container.appendChild(newDiv);
        }
    }
}