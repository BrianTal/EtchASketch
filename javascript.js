const container = document.querySelector(".container");
const newSizeButton = document.querySelector(".new");
const resetButton = document.querySelector(".reset");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");
let gridAmount = 16;
let hover = 'black';

function randomRGBGenerator(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g, b}
}

function drawGrid(gridSize){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for(let i = 0; i < gridSize; i++){
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        for(let x = 0; x < gridSize; x++){
            const widthAndHeight = 640 / gridSize;
            let gridBox = document.createElement('div');
            gridBox.classList.add('grid');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            divRow.appendChild(gridBox);
  
        }
        wrapper.appendChild(divRow);
    }
    container.appendChild(wrapper);
}

function setHover(){
    const allGrids = document.querySelectorAll('.grid');
    if(hover == "black"){
        allGrids.forEach(div => {
            div.addEventListener('mouseenter', () =>{
                div.style.backgroundColor = "black";
            })
        })
    }
    else if(hover == "rainbow"){
        allGrids.forEach(div => {
            div.addEventListener('mouseenter', () =>{
                const {r, g, b} = randomRGBGenerator();
                const bgColor = "rgb(" + r + "," + g + "," + b + ")";
                div.style.backgroundColor = bgColor;
            })
        })
    }
}

newSizeButton.addEventListener('click', () => {
    let userSize = Number(prompt('How large would you like your grid?'));
    while(userSize > 64){
        userSize = Number(prompt('Please enter new size less then 64'));
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    drawGrid(userSize);
    gridAmount = userSize;
    setHover();
})

resetButton.addEventListener('click', () =>{
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach(div => {
        div.style.backgroundColor = "white";
    })
})

black.addEventListener('click', () =>{
    hover = 'black';
    setHover();
})

rainbow.addEventListener('click', () => {
    hover = 'rainbow';
    setHover();
})



drawGrid(gridAmount);
setHover();