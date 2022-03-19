// Generating the grid

const container = document.querySelector(".container");

const cell = document.createElement('div')



function grid (cell)  {
    
    for (i= 0 ; i<255; i++){
        cell = document.createElement('div')
        cell.classList.add('cells')
        container.appendChild(cell)
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.add('hover')
        })
    }
    
}

grid (cell)



