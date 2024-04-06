console.log("Hey! Welcome to this console-based Rock, Paper Scissors game.\n\n"
          + "Let's Begin! To play, enter 'playGame()'")


//GENERATE RANDOM NUMBER FOR COMPUTER
function getComputerChoice () {
  let randomN = ['rock','paper','scissors'];
  return (randomN[ Math.floor(Math.random() * randomN.length) ]);
}

function playRound(playerChoice, computerChoice) {

    playerChoice = String(playerChoice).toLowerCase()

    console.log("\n      " +
    (playerChoice + " X " + computerChoice).toUpperCase() + "\n\n");


//-----IF TIE
    if (playerChoice === computerChoice) {
      return `It's a tie! Both chose ${playerChoice}`;
    }
//-----IF NOT TIE, EVALUATE FOR ALL POSSIBLE CASES

      switch (playerChoice) {

        case 'rock':
          if (computerChoice === 'scissors') {
            return "You Win! Rock beats Scissors"
          } else {
          return "You Lose! Paper beats Rock"
          }
          break

        case 'paper':
          if (computerChoice === 'rock') {
            return "You Win! Paper beats Rock"
          } else {
            return "You Lose! Scissors beats Paper"
          }
          break

        case 'scissors':
          if (computerChoice === 'paper') {
            return "You Win! Scissors beats Paper"
          } else {
            return "You Lose! Rock beats Scissors"
          }
          break

        default:
        return "Ummm... That doesn't make sense.\n"
              +  "          Try again!";
      }


}

function playGame() {

  let player = 0;
  let comp = 0;
  let rounds = 0;

  while(rounds < 5) {
////ASK PLAYER'S & COMPUTER'S CHOICE
    let playerChoice = prompt('Rock, Paper or Scissors?');
    const result = playRound(playerChoice, getComputerChoice());

////TEST FOR WIN, LOSE OR WRONG
    if ( result.includes('You Win!') ) {
      ++player;
      console.log(result)
    }
    else if ( result.includes('You Lose!') ) {
      ++comp;
      console.log(result)
    }
    else {
      console.log(result)
    }
////
    if( !(result.includes("Ummm...")) ) {
      ++rounds
    }
    console.log('PLAYER:', player, ' COMP:', comp)
    console.log('ROUNDS: ', rounds);
  }

  if (player === comp) {
    return "Oh it's a tie! One more?"
  }
  else if (player > comp) {
    return "Congratulations, you won! Let's play another one?";
  }
  else {
    return "Too bad you lost... Let's play another one?"
  }

  player = 0;
  comp = 0;
  rounds = 0;

}
