console.log("Hey! Welcome to this console-based Rock, Paper Scissors game.\n\n" +
"Let's Begin! To play, enter 'fullMatch()'")


let player = 0;
let comp = 0;

//GENERATE RANDOM NUMBER FOR COMPUTER
function getComputerChoice () {
  let randomN = Math.random() * 100;

//RETURN MOVE DEPENDING ON NUMBER RANGE
  if (randomN <= 33) {
    return "rock"
  } else if (randomN <= 66) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerChoice, computerChoice) {

//IF NOT A A VALID MOVE...
  if (typeof(playerChoice) !== 'string' &&
  !(  playerChoice  === 'rock'
  ||  playerChoice  === 'paper'
  ||  playerChoice  === 'scissors') ) {
    return "Ummm... That doesn't make sense.\n"
        +  "          Try again!";
  }
//IF A VALID MOVE
  else {
        playerChoice = playerChoice.toLowerCase()
        console.log("\n      " + (playerChoice + " X " + computerChoice).toUpperCase() + "\n\n")

//-----IF TIE
    if (playerChoice === computerChoice) {
      return `It's a tie! Both chose ${playerChoice}`;
    }
//-----IF NOT TIE, EVALUATE FOR ALL POSSIBLE CASES
    else {

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
          break

        default:
        return "Ummm... That doesn't make sense.\n"
              +  "          Try again!";
      }


    }

  }


}

function playGame() {

////ASK PLAYER'S & COMPUTER'S CHOICE
    let playerChoice = prompt('Rock, Paper or Scissors?');
    const result = playRound(playerChoice, getComputerChoice());

////TEST FOR WIN, LOSE OR WRONG
    if ( result.includes('You Won!') ) {
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
    console.log('PLAYER:', player, ' COMP:', comp)
    console.log('ROUNDS: ' + (player + comp));
}

function fullMatch (){

//PLAY FOR 5 SCORED ROUNDS
  while( player + comp < 5){
    playGame()
  }

  if (player > comp) {
    return "Congratulations, you won! Let's play another one?";
  }
  else {
    return "Too bad you lost... Let's play another one?"
  }

  player = 0;
  comp = 0;

}
