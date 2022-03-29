// Targets the container

const container = document.querySelector("#container");

const cell = document.createElement('div');

// Targets the clear button 

const btn = document.querySelector('button');
btn.classList.add('btn')
btn.textContent = 'Clear';


// Creates the 16x16 grid

function createGrid (square){

    let grid = square * square

    for (let i = 0; i< grid; i++) {
        let colRow = document.createElement ('div')
        colRow.classList.add('colRow')
        container.appendChild(colRow)
        container.style.setProperty('grid-template-columns', 'repeat(' + square + ', 1fr)');  
        container.style.setProperty('grid-template-rows', 'repeat(' + square + ', 1fr)');
        colRow.addEventListener('mouseover', function (e) {
            e.target.classList.add ('hover')
        });

    }

}

createGrid(64)



// Resets the grid to blank


