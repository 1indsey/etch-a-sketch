const container = document.querySelector('#container');
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

const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener("click", () => {
    userInput = prompt("How many squares would you like each side of the grid to have?");
    while (userInput > 100) {
        userInput = prompt("Please choose a number between 1 and 100");
    }
        console.log(userInput);
    });


const removeGridBtn = document.querySelector('#removeGridTest');
divs.forEach((divs) => {
removeGridBtn.addEventListener ("click", () => {
    container.removeChild(divs);
})});
//this section removes the existing grid on button click

//take userInput
//remove existing grid - container.removeChild('.square')
//replace with new grid, each side has the # of divs given by user
//new grid should take up same total space as previous grid