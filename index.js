let score = [0, 0]

let computerChoice = function getCpuChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

function playRound (cpuChoice, playerChoice) {
    console.log(cpuChoice, playerChoice)
    if (cpuChoice == playerChoice) {
        return 'draw'
    } else if (cpuChoice == 'rock') {
        if (playerChoice == 'scissors') {
            return 'cpu'
        } else if (playerChoice == 'paper') {
            return 'player'
        }
    } else if (cpuChoice == 'paper') {
        if (playerChoice == 'scissors') {
            return 'player'
        } else if (playerChoice == 'rock') {
            return 'cpu'
        }
    } else if (cpuChoice == 'scissors') {
        if (playerChoice == 'rock') {
            return 'player'
        } else if (playerChoice == 'paper') {
            return 'cpu'
        }
    }
}

function game () {
    // let userChoice = prompt('rock paper or scissors')
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerChoice(), userChoice.toLowerCase()))
     }
}

game()
// console.log(playRound(computerChoice(), userChoice));