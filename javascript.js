const container = document.querySelector('.flexContainer');
//store container div in variable so we can append child divs inside it


for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
  };
//create 256 of the same divs (need 16x16 block)

const divs = document.querySelectorAll(".square");
divs.forEach((divs) => {
    divs.addEventListener("mouseover", () => {
        divs.classList.add('colorChange');
    })
});
//adds new class to each div when it is mouse-overed; this new class changes the color


let userInput;

function getUserInput() {
    userInput = prompt("How many squares would you like each side of the grid to have?");
    if (userInput === null) {
        return;
    };
    while (isNaN(userInput) || userInput > 100 || userInput < 1) {
        userInput = prompt("Invalid answer! Please choose a number between 1 and 100");
    };
    console.log(userInput);
};

function removeDivs() {
    divs.forEach((divs) => {
        container.removeChild(divs)
    })};

function createNewGrid() {
    container.classList.remove('flexContainer');
    container.classList.add('gridContainer');
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    for (let i = 0; i < (userInput ** 2); i++) {
        const div2 = document.createElement('div');
        div2.classList.add('gridSquare');
        container.appendChild(div2);
    };
    const divs2 = document.querySelectorAll(".gridSquare");
    divs2.forEach((divs2) => {
        divs2.addEventListener("mouseover", () => {
            divs2.classList.add('colorChange');
        });
    });
};



const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener("click", () => {
    getUserInput();
    removeDivs();
    createNewGrid();
    });

const removeGridBtn = document.querySelector('#removeGridTest');
divs.forEach((divs) => {
removeGridBtn.addEventListener ("click", () => {
    container.removeChild(divs);
})});
//this section removes the existing grid on button click (TEST ONLY)

//take userInput
//remove existing grid - container.removeChild('.square')
//replace with new grid, each side has the # of divs given by user
//new grid should take up same total space as previous grid