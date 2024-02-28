const container = document.querySelector('.container');

const INITIAL_GRID_DIM = 16;
const DIV_BORDER_WIDTH = 1;
const DEFAULT_BODY_MARGIN = 8;
const DEFAULT_BUTTON_HEIGHT = 21;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight - DEFAULT_BUTTON_HEIGHT;

let containerWidth = 0;

if (windowWidth < windowHeight) {
    containerWidth = windowWidth - ( 2 * DEFAULT_BODY_MARGIN );
}
else {
    containerWidth = windowHeight - ( 2 * DEFAULT_BODY_MARGIN );
}

container.style.maxWidth = containerWidth + 'px';
container.style.minWidth = containerWidth + 'px';

let sizeButton = document.querySelector('button');

sizeButton.addEventListener('click', function(){
    deleteGrid();
    do {
        gridDim = Number(prompt("Input a new grid width, must be no more than 100!"));
    } while (gridDim > 100)
    setGrid(gridDim, DIV_BORDER_WIDTH, containerWidth);
});

document.onload = setGrid(INITIAL_GRID_DIM, DIV_BORDER_WIDTH, containerWidth);


function setGrid(gridDim, borderWidth, containerWidth) {
    let divWidth = containerWidth / gridDim;

    for (let i = 0; i < gridDim; i++) {
        for (let j = 0; j < gridDim; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('pixels');
            newDiv.style.padding = (divWidth - ( 2 * borderWidth ) ) / 2 + "px";
            newDiv.addEventListener('mouseenter', () => {
                newDiv.style.backgroundColor = 'green';
            })
            container.appendChild(newDiv);
        }
    }
}

function deleteGrid() {
    entireGrid = Array.from(document.querySelectorAll('.pixels'));
    entireGrid.forEach(element => element.remove());
}