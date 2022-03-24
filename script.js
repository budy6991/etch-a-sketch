// Targets the container

const container = document.querySelector(".container");

const cell = document.createElement('div');

// Targets the clear button 

const btn = document.querySelector('button');
btn.classList.add('btn')
btn.textContent = 'Clear';


// Creates the 16x16 grid

function createGrid (columns, rows){

    let grid = columns * rows;

    for (let i = 0; i< grid; i++) {
        let colRow = document.createElement ('div')
        colRow.classList.add('colRow');
        container.appendChild(colRow);
        colRow.addEventListener('mouseover', function (e) {
            e.target.classList.add ('hover')
        });
        
    }

    

}

createGrid(16,16)

// Resets the grid to blank


