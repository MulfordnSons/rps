userChoice = prompt('rock paper or scissors')

computerChoice = function getCpuChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

function playRound (cpuChoice, playerChoice) {
    console.log(cpuChoice, playerChoice)
    if (cpuChoice == playerChoice) {
        return 'DRAW'
    } else if (cpuChoice == 'rock') {
        if (playerChoice == 'scissors') {
            return 'SCISSORS BEATS ROCK'
        } else if (playerChoice == 'paper') {
            return 'ROCK BEATS PAPER'
        }
    } else if (cpuChoice == 'paper') {
        if (playerChoice == 'scissors') {
            return 'SCISSORS BEATS PAPER'
        } else if (playerChoice == 'rock') {
            return 'PAPER BEATS ROCK'
        }
    } else if (cpuChoice == 'scissors') {
        if (playerChoice == 'rock') {
            return 'ROCK BEATS SCISSORS'
        } else if (playerChoice == 'paper') {
            return 'SCISSORS BEATS PAPER'
        }
    }
}

console.log(playRound(computerChoice(), userChoice));