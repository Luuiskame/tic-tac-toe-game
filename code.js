// getting our html and css elements
const  cells = document.querySelectorAll(".cells")
let currentPlayer = "X"
const playAgain = document.getElementById("reset-btn")
const winnerText = document.getElementById("text-winner")
const xScoreText = document.getElementById("xscore-text")
const oScoreText = document.getElementById("oscore-text")
let isGameActive = false

let xScore = 0
let oScore = 0

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", ""]


const blurr = document.querySelector(".blur-effect")
const startGameBtn = document.querySelector(".start-game-btn")

startGameBtn.addEventListener("click", function(){
    startGame()
    blurr.classList.toggle("remove")
    startGameBtn.classList.toggle("remove")
    
})

function startGame(){
    winnerText.innerHTML = `${currentPlayer}'s turn`
    isGameActive = true
    cells.forEach(cell=> cell.addEventListener("click",function(){
        checkGame(cell)
    }))
}

function checkGame(cell){
    if (isGameActive === true){
        cell.innerHTML = currentPlayer
        changePlayer()
        updateCell()
        checkWin()
        chekcTie()
    }
}

function updateCell(){
    cells.forEach((cell,index)=>{
        options[index] = cell.innerHTML
        console.log(options[index])
    })
}

function changePlayer(){
    if(currentPlayer === "X"){
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
    winnerText.innerHTML = `${currentPlayer}'s turn`
}

function checkWin(){
    for (let i = 0; i < winConditions.length; i++){
        const winIndex = winConditions[i]
        const cellA = options[winIndex[0]]
        const cellB = options[winIndex[1]]
        const cellC = options[winIndex[2]]
        
        if (cellA !== "" && cellA === cellB && cellB === cellC){
            winnerText.innerHTML = `${cellA} wins`
            isGameActive = false
            

            if (cellA === "X"){
                xScore++
                updateScore(xScoreText, xScore)
            } else {
                oScore++
                updateScore(oScoreText,oScore)
            }
        }
    }
}

function chekcTie(){
    for (let i = 0; i < options.length; i++){
        if (options[i] === ""){
            return 
        }
    }
    winnerText.innerHTML = "It's a tie"
}


function updateScore(scoreEl,value){
    scoreEl.innerHTML = value
}

playAgain.addEventListener("click", function(){
    resetGame()
})

function resetGame() {
    currentPlayer = "X"
    winnerText.innerHTML = `${currentPlayer}'s turn`
    options =  ["", "", "", "", "", "", "", "", ""]    
    cells.forEach(cell=>{
        cell.innerHTML = ""
    })
    isGameActive = true
}

// function disbleCell(){
//     cells.forEach(cell=>{
//         if (cell.innerHTML === currentPlayer){
//             cell.removeEventListener("click", function(){})
//         }
//     })
//     changePlayer()
// }
















