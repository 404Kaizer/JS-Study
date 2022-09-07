const COMPUTER_CHOICE = document.getElementById('comp-choice')
const PLAYER_CHOICE = document.getElementById('player-choice')
const GAME_RESULT = document.getElementById('game-result')
const CHOICES = document.querySelectorAll('input')

let playerChoiceValueStorage
let compChoiceValueStorage
let resultValueStorage

CHOICES.forEach(CHOICES => CHOICES.addEventListener('click', (e) => {
    playerChoiceValueStorage = e.target.value
    PLAYER_CHOICE.innerText = playerChoiceValueStorage
    generateRandomNum()
    checkGameResult()
}))

let generateRandomNum = () => {
    const RANDOM_NUM = Math.floor(Math.random() * CHOICES.length) + 1

    switch(RANDOM_NUM) {
        case 1:
            compChoiceValueStorage = "Rock"
            break;
        case 2:
            compChoiceValueStorage = "Paper"
            break;
        case 3:
            compChoiceValueStorage = "Scissors"
            break;
        default:
            alert("For Some Reason, There Is a Invalid Case.")
    }

    COMPUTER_CHOICE.innerText = compChoiceValueStorage
}

let checkGameResult = () => {

    if(playerChoiceValueStorage === compChoiceValueStorage) {
        resultValueStorage = "Draw!!"
        GAME_RESULT.style.color = "yellow"
    }
    
    if(playerChoiceValueStorage === "Rock" && compChoiceValueStorage === "Paper") { 
        resultValueStorage = "You Lost!!"
        GAME_RESULT.style.color = "red"
    }

    if(playerChoiceValueStorage === "Rock" && compChoiceValueStorage === "Scissors") {
        resultValueStorage = "You Win!!"
        GAME_RESULT.style.color = "green"
    }

    if(playerChoiceValueStorage === "Paper" && compChoiceValueStorage === "Rock") {
        resultValueStorage = "You Win!!"
        GAME_RESULT.style.color = "green"
    }

    if(playerChoiceValueStorage === "Paper" && compChoiceValueStorage === "Scissors") { 
        resultValueStorage = "You Lost!!"
        GAME_RESULT.style.color = "red"
    }

    if(playerChoiceValueStorage === "Scissors" && compChoiceValueStorage === "Rock") {
        resultValueStorage = "You Lost!!"
        GAME_RESULT.style.color = "red"
    }

    if(playerChoiceValueStorage === "Scissors" && compChoiceValueStorage === "Paper") {
         resultValueStorage = "You Win!!"
         GAME_RESULT.style.color = "green"
    }

    GAME_RESULT.innerText = resultValueStorage
}