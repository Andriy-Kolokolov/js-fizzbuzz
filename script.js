let eleGrid = document.querySelector(".grid");

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        eleGrid.innerHTML += `<div class="cell" style="background-color: #ee456e">fizzbuzz</div>`
    }
    else if (i % 3 === 0) {
        eleGrid.innerHTML += `<div class="cell" style="background-color: #0cd6a1">fizz</div>`;
    } 
    else if (i % 5 === 0) {
        eleGrid.innerHTML += `<div class="cell" style="background-color: #fdcf65">buzz</div>`
    }
    else {
        eleGrid.innerHTML += `<div class="cell" style="background-color: #1388b1">${i}</div>`
    }
}