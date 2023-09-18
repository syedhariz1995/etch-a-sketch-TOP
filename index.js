
const board = document.querySelector('.board')
const dropdown = document.getElementById('dropdown')


const updateGrid = () => {
    const selectedValue = dropdown.value

    if(selectedValue === "option1"){
        board.style.gridTemplateColumns = 'repeat(1, 1fr)'
        board.style.gridTemplateRows = 'repeat(1, 1fr)'
        board.innerHTML = ""
        
        for (let i = 0; i < 1; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }

    if(selectedValue === "option2"){
        board.style.gridTemplateColumns = 'repeat(2, 1fr)'
        board.style.gridTemplateRows = 'repeat(2, 1fr)'
        board.innerHTML = ""

        for (let i = 0; i < 4; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }

    if(selectedValue === "option3"){
        board.style.gridTemplateColumns = 'repeat(4, 1fr)'
        board.style.gridTemplateRows = 'repeat(4, 1fr)'
        board.innerHTML = ""

        for (let i = 0; i < 16; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }

    if(selectedValue === "option4"){
        board.style.gridTemplateColumns = 'repeat(8, 1fr)'
        board.style.gridTemplateRows = 'repeat(8, 1fr)'
        board.innerHTML = ""

        for (let i = 0; i < 64; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }

    if (selectedValue === 'option5') {
        board.style.gridTemplateColumns = 'repeat(16, 1fr)'
        board.style.gridTemplateRows = 'repeat(16, 1fr)'
        board.innerHTML = ""

        for (let i = 0; i < 256; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }

    if (selectedValue === 'option6') {
        board.style.gridTemplateColumns = 'repeat(32, 1fr)'
        board.style.gridTemplateRows = 'repeat(32, 1fr)'
        board.innerHTML = ""

        for (let i = 0; i < 1024; i++) {
            const square = document.createElement('div')
            square.style.border = '1px solid black'
            board.append(square)
        }
    }
}


dropdown.addEventListener('change', updateGrid)

updateGrid()