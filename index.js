
// const board = document.querySelector('.board')
// const dropdown = document.getElementById('dropdown')
// const black = document.getElementById('black')
// const white = document.getElementById('white')
// const randomColour = document.getElementById('random');
// const reset = document.getElementById('reset');


// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

// const updateGrid = () => {
//     const selectedValue = dropdown.value

//     if (selectedValue === "option1") {
//         board.style.gridTemplateColumns = 'repeat(1, 1fr)'
//         board.style.gridTemplateRows = 'repeat(1, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 1; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//              });

//              reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === "option2") {
//         board.style.gridTemplateColumns = 'repeat(2, 1fr)'
//         board.style.gridTemplateRows = 'repeat(2, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 4; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === "option3") {
//         board.style.gridTemplateColumns = 'repeat(4, 1fr)'
//         board.style.gridTemplateRows = 'repeat(4, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 16; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === "option4") {
//         board.style.gridTemplateColumns = 'repeat(8, 1fr)'
//         board.style.gridTemplateRows = 'repeat(8, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 64; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === 'option5') {
//         board.style.gridTemplateColumns = 'repeat(16, 1fr)'
//         board.style.gridTemplateRows = 'repeat(16, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 256; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === 'option6') {
//         board.style.gridTemplateColumns = 'repeat(32, 1fr)'
//         board.style.gridTemplateRows = 'repeat(32, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 1024; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }

//     if (selectedValue === 'option7') {
//         board.style.gridTemplateColumns = 'repeat(64, 1fr)'
//         board.style.gridTemplateRows = 'repeat(64, 1fr)'
//         board.innerHTML = ""

//         for (let i = 0; i < 4096; i++) {
//             const square = document.createElement('div')
//             square.style.border = '1px solid black'
//             board.append(square)

//             black.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'black'
//                 })
//             })

//             white.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                     square.style.backgroundColor = 'white'
//                 })
//             })

//             randomColour.addEventListener('click', () => {
//                 square.addEventListener('mouseover', () => {
//                   square.style.backgroundColor = getRandomColor();
//                 });
//             });

//             reset.addEventListener('click', () => {
//                 square.style.backgroundColor = 'white'
//             })
//         }
//     }
// }


// dropdown.addEventListener('change', updateGrid)

// updateGrid()





const board = document.querySelector('.board')
const dropdown = document.getElementById('dropdown')
const black = document.getElementById('black')
const white = document.getElementById('white')
const randomColour = document.getElementById('random')
const reset = document.getElementById('reset')

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
};

const createGrid = (columns, rows) => {
  board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  board.innerHTML = ''

  for (let i = 0; i < columns * rows; i++) {
    const square = document.createElement('div')
    square.style.border = '1px solid black'
    board.append(square)

    black.addEventListener('click', () => {
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black'
      })
    })

    white.addEventListener('click', () => {
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'white'
      })
    })

    randomColour.addEventListener('click', () => {
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor()
      })
    })

    reset.addEventListener('click', () => {
      square.style.backgroundColor = 'white'
    })
  }
}

const updateGrid = () => {
  const selectedValue = dropdown.value;

  if (selectedValue === 'option1') {
    createGrid(1, 1)
  } else if (selectedValue === 'option2') {
    createGrid(2, 2)
  } else if (selectedValue === 'option3') {
    createGrid(4, 4)
  } else if (selectedValue === 'option4') {
    createGrid(8, 8)
  } else if (selectedValue === 'option5') {
    createGrid(16, 16)
  } else if (selectedValue === 'option6') {
    createGrid(32, 32)
  } else if (selectedValue === 'option7') {
    createGrid(64, 64)
  } else {
    createGrid(16, 16)
  }
};

dropdown.addEventListener('change', updateGrid);
updateGrid()