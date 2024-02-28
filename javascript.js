const container = document.querySelector('.container');

let gridDim = 16;
const DIV_BORDER_WIDTH = 1;
const DEFAULT_BODY_MARGIN = 8;
const DEFAULT_BUTTON_HEIGHT = 21;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight - DEFAULT_BUTTON_HEIGHT;

let TEN_PERCENT_RED = -255/10;
let TEN_PERCENT_GREEN = -127/10;
let TEN_PERCENT_BLUE = -255/10;

let containerWidth = 0;

if (windowWidth < windowHeight) {
    containerWidth = windowWidth - ( 2 * DEFAULT_BODY_MARGIN );
}
else {
    containerWidth = windowHeight - ( 2 * DEFAULT_BODY_MARGIN );
}

container.style.maxWidth = containerWidth + 'px';
container.style.minWidth = containerWidth + 'px';

let sizeButton = document.querySelector('.resize');
let shadingButton = document.querySelector('.shading');
let randomButton = document.querySelector('.random');

sizeButton.addEventListener('click', function(){
    deleteGrid();
    do {
        gridDim = Number(prompt("Input a new grid width, must be no more than 100!"));
    } while (gridDim > 100)
    setGrid(gridDim, DIV_BORDER_WIDTH, containerWidth);
});


shadingButton.addEventListener('click', function(){
    deleteGrid();
    setGrid(gridDim, DIV_BORDER_WIDTH, containerWidth, 'shading');    
});

randomButton.addEventListener('click', function(){
    deleteGrid();
    setGrid(gridDim, DIV_BORDER_WIDTH, containerWidth, 'random');    
});


document.onload = setGrid(gridDim, DIV_BORDER_WIDTH, containerWidth);


function setGrid(gridDim, borderWidth, containerWidth, colorType='none') {
    let divWidth = containerWidth / gridDim;

    for (let i = 0; i < gridDim; i++) {
        for (let j = 0; j < gridDim; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('pixels');
            newDiv.style.padding = (divWidth - ( 2 * borderWidth ) ) / 2 + "px";
            newDiv.style.backgroundColor = 'rgb(255, 255, 255)'
            switch (colorType) {
                case 'shading':
                    newDiv.addEventListener('mouseenter', () => {
                        let rgbVec = getRGB(newDiv);
                        let red = Number(rgbVec[0]);
                        let green = Number(rgbVec[1]);
                        let blue = Number(rgbVec[2]);
                        if (green > 128) {
                            newDiv.style.backgroundColor = `rgb(${red + TEN_PERCENT_RED}, ${green + TEN_PERCENT_GREEN}, ${blue + TEN_PERCENT_BLUE})`;
                        }
                    })
                    break;
                case 'random':
                    newDiv.addEventListener('mouseenter', () => {
                        newDiv.style.backgroundColor = `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`;
                    })  
                    break;      
                default:
                    newDiv.addEventListener('mouseenter', () => {
                        newDiv.style.backgroundColor = 'rgb(0, 128, 0)';
                    })
            }

            container.appendChild(newDiv);
        }
    }
}

function deleteGrid() {
    entireGrid = Array.from(document.querySelectorAll('.pixels'));
    entireGrid.forEach(element => element.remove());
}

// function deleteGridColor() {
//     entireGrid = Array.from(document.querySelectorAll('.pixels'));
//     entireGrid.forEach(element => element.style.backgroundColor = 'white');
// }

function getRGB(element) {
    let rgbStr = element.style.backgroundColor;
    rgbStr = rgbStr.substring(4, rgbStr.length - 1);
    return rgbStr.split(', ');
}