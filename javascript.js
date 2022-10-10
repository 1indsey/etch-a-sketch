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