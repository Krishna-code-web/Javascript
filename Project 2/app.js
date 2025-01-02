const buttons = document.querySelectorAll('.image')
const move = document.querySelector('.move')
const user = document.querySelector('.user')
const computer = document.querySelector('.computer')


let countUser = 0
let countComputer = 0

console.log(buttons);

let answer = ["rock", "paper", "scissor"]
let random 

const randomNumber = () => {
    let i = Math.floor(Math.random() * answer.length);
    random = answer[i]
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userInput = button.getAttribute('id')
        randomNumber()
        
        console.log(random);
    
        if(random == "rock"){
            if(userInput == "rock"){
                move.textContent = "It's a Draw!"
            } else if(userInput == "paper"){
                countUser++
                user.textContent = countUser
                move.textContent = "You Win! Paper beats Rock"
            } else{
                countComputer++
                computer.textContent = countComputer
                move.textContent = "You lose! Rock beats Scissor"
            } 
        } else if(random == "paper"){
            if(userInput == "rock"){
                countComputer++
                computer.textContent = countComputer
                move.textContent = "You lose! Paper beats rock"
            } else if(userInput == "paper"){
                move.textContent = "It's a Draw!"
            } else{
                countUser++
                user.textContent = countUser
                move.textContent = "You Win! Scissor beats Paper"
            } 
        } else{
            if(userInput == "rock"){
                countUser++
                user.textContent = countUser
                move.textContent = "You Win! Rock beats Scissors"
            } else if(userInput == "Scissors"){
                move.textContent = "It's a Draw!"
            } else{
                countComputer++
                computer.textContent = countComputer
                move.textContent = "You lose! Scissors beats paper"
            }
        }
    })
})

// buttons[0].addEventListener("click", () => {
//     randomNumber()
//     console.log(random);
    
//     if(random == "rock"){
//         move.textContent = "It's a Draw!"
//     } else if(random == "paper"){
//         countComputer++
//         computer.textContent = countComputer
//         move.textContent = "You lose! Paper beats Rock"
//     } else{
//         countUser++
//         user.textContent = countUser
//         move.textContent = "You Win! Rock beats Scissor"
//     }
// })

// buttons[1].addEventListener("click", () => {
//     randomNumber()
//     console.log(random);

//     if(random == "rock"){
//         countUser++
//         user.textContent = countUser
//         move.textContent = "You Win! Paper beats Rock"
//     } else if(random == "paper"){
//         move.textContent = "It's a Draw!"
//     } else{
//         countComputer++
//         computer.textContent = countComputer
//         move.textContent = "You lose! Scissor beats Paper"
//     }
// })

// buttons[2].addEventListener("click", () => {
//     randomNumber()
//     console.log(random);

//     if(random == "rock"){
//         countComputer++
//         computer.textContent = countComputer
//         move.textContent = "You lose! Rock beats Scissor"
//     } else if(random == "paper"){
//         countUser++
//         user.textContent = countUser
//         move.textContent = "You Win! Scissor beats Paper"
//     } else{
//         move.textContent = "It's a draw"
//     }
// })


