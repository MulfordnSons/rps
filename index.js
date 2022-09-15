function getCpuChoice () {
    let choices = ['rock', 'paper', 'scissors']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice
}

function playRound (cpuChoice, playerChoice) {
    if (cpuChoice == playerChoice) {
        console.log('DRAW')
    }
    else if (cpuChoice == 'rock' && playerChoice == 'paper')
}

console.log(getCpuChoice())