userChoice = prompt('rock paper or scissors')

computerChoice = function getCpuChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

function playRound (cpuChoice, playerChoice) {
    console.log(cpuChoice, playerChoice)
    if (cpuChoice == playerChoice) {
        console.log('DRAW')
    } else if (cpuChoice == 'rock') {
        if (playerChoice == 'paper') {
            console.log('PAPER BEATS ROCK')
        }
        else if (playerChoice == 'scissors') {
            console.log('ROCK BEATS SCISSORS')
        }
    } else if (cpuChoice == 'paper') {
        if (playerChoice == 'rock') {
            console.log('PAPER BEATS ROCK')
        }
        else if (playerChoice == 'scissors') {
            console.log('SCISSORS BEATS PAPER')
        } else if (cpuChoice == 'scissors') {
        if (playerChoice == 'rock') {
            console.log('ROCK BEATS SCISSORS')
        } else if (playerChoice == 'paper') {
            console.log('SCISSORS BEATS PAPER')
        }
    }
    }
}

playRound(computerChoice(), userChoice);