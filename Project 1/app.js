const boxes = document.querySelectorAll('.box')
const winner = document.querySelector('.winner')
const reset = document.querySelector('.reset')

let turn = 'O'

boxes.forEach((item) => {
    item.addEventListener("click", () => {
        if(turn == 'O'){
            item.textContent = turn
            turn = 'X'
        } else {
            item.textContent = turn
            turn = 'O'
        }
        item.disabled = true

        checkWinner()
    })
})

let Patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const checkWinner = () => {
    Patterns.forEach((pattern) => {
        let item1 = boxes[pattern[0]].textContent
        let item2 = boxes[pattern[1]].textContent
        let item3 = boxes[pattern[2]].textContent
        
        if(item1 !== "" && item2 !== "" && item3 !== ""){
            if(item1 == 'O' && item2 == 'O' && item3 == 'O'){
                winner.style.display = "unset"
                winner.textContent = "Congratulations! O Wins"
                disableAll()
            } else if(item1 == 'X' && item2 == 'X' && item3 == 'X') {
                winner.style.display = "unset"
                winner.textContent = "Congratulations! X Wins"
                disableAll()
            }
        }
    })
}

const disableAll = () => {
    boxes.forEach((box) => {
        box.disabled = true
    })
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = ""
    })
    ableAll()
    winner.style.display = "none"
})

const ableAll = () => {
    boxes.forEach((box) => {
       box.disabled = false
    })
}



