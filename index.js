let scores = [0, 0]

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
            scores[1] += 1
            return 'cpu'
        } else if (playerChoice == 'paper') {
            scores[0] += 1
            return 'player'
        }
    } else if (cpuChoice == 'paper') {
        if (playerChoice == 'scissors') {
            scores[0] += 1
            return 'player'
        } else if (playerChoice == 'rock') {
            scores[1] += 1
            return 'cpu'
        }
    } else if (cpuChoice == 'scissors') {
        if (playerChoice == 'rock') {
            scores[0] += 1
            return 'player'
        } else if (playerChoice == 'paper') {
            scores[1] += 1
            return 'cpu'
        }
    }
}


function checkScore(score) {
    return score <= 5;
}


startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function (e) {
        // enable choice buttons - game can now be played
        document.querySelectorAll('.button').forEach(item => {
            item.disabled = false;
        
        // enable end game button so game can be quit at any time
        document.getElementById('end-button').disabled = false;
        })
    })

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
      console.log(`'button pressed ${item.textContent.toLowerCase()}'`)
      // add logic of game here, play a round and after each round, update
      // the scores in the bottom right of screen. Also, check the scores and once
      // a score reaches 5, end the game and display the winner.
    })
  })

// choices are disabled by default. when user clicks start, buttons are enabled and the
// function that handles game logic is tied to the event listener for the choices.
// buttons are disabled when a score of 5 has been reached, and the winner is displayed
// top middle of screen. 