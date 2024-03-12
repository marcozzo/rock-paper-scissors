console.log("Hey! Welcome to this console-based Rock, Paper Scissors game!")

function getComputerChoice () {
  let randomN = Math.random() * 100;

  if (randomN <= 33) {
    return "rock"
  } else if (randomN <= 66) {
    return "paper"
  } else {
    return "scissors"
  }
}

let playRound = function (playerChoice, computerChoice) {

  playerChoice = playerChoice.toLowerCase()

  if (playerChoice === computerChoice) {
    return `It's a tie! Both chose ${playerChoice}`
  }

  switch (playerChoice) {

    case 'rock':
      if (computerChoice === 'scissors') {
        return "You Won! Rock beats Scissors"
      } else {
      return "You Lose! Paper beats Rock"
      }
      break

    case 'paper':
      if (computerChoice === 'rock') {
        return "You Won! Paper beats Rock"
      } else {
        return "You Lose! Scissors beats Paper"
      }
      break

    case 'scissors':
      if (computerChoice === 'paper') {
        return "You Won! Scissors beats Paper"
      } else {
        return "You Lose! Rock beats Scissors"
      }

    default:
    return `Ummm... That one is not valid.
Try paper, rock or scissors.`;
  }
}
