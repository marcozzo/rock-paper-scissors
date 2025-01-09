let playerScore = 0;
let computerScore = 0;

const options = document.querySelector('#player-selection');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('.container');

const player = document.querySelector('#player');
const cpu = document.querySelector('#cpu');
const scoreboard = document.querySelector('#scoreboard');

//since node references stay in memory
//this one can be created before being displayed

player.textContent = 'PLAYER: ' + playerScore;
cpu.textContent = 'CPU: ' + computerScore;

const result = document.querySelector('#result');

scoreboard.append(player, cpu);

let playerChoice = '';

function checkButton(event) {
    let e = event.target;
    playerChoice = e.id;
}

options.addEventListener('click', playRound)

function playRound(event) {

    //IF PLAYER CLICKS ON BUTTONS CONTAINER, NO RESPONSE
    if (event.target.id === "player-selection") {
        return
    }

    checkButton(event); //CHECK WHICH BUTTON
    let computerChoice = getComputerChoice();

    //CASES

    console.log('player: ' + playerChoice);
    console.log('computer: ' + computerChoice);

    checkResult(playerChoice, computerChoice)

    player.textContent = 'PLAYER: ' + playerScore;
    cpu.textContent = 'CPU: ' + computerScore;

    //make "START OVER" button

    if (playerScore === 5 || computerScore === 5) {

        result.style.fontSize = "25px";

        if (playerScore === 5) {
            result.textContent = "Congrats!\nYou Won!!!";
        }
        if (computerScore === 5) {
            result.textContent = "Computer Won!";
        }

        const again = document.createElement('button');
        again.style.marginTop = '5px'
        again.textContent = "START OVER"
        container.appendChild(again);
        options.textContent = "";

        //RESTART + RESET SCORES AND RESULT PANEL
        again.addEventListener('click', () => {
            options.append(rock, paper, scissors);
            again.parentElement.removeChild(again);

            playerScore = 0;
            computerScore = 0;

            player.textContent = 'PLAYER: ' + playerScore;
            cpu.textContent = 'CPU: ' + computerScore;
            result.textContent = '';
        })
    }

}



////RESET ROUNDS
//  roundCount = 1;

/*////FINAL MESSAGE////
if (playerScore === computerScore) {
    playerScore = 0;
    computerScore = 0;
    return "The game is a tie!"
}
else if (playerScore > computerScore) {
    playerScore = 0;
    computerScore = 0;
    return "Congratulations! You won the game."
}
else {
    playerScore = 0;
    computerScore = 0;
    return "You lost the game."
}*/


//REMOVED "getNumber function"
let getComputerChoice = function () {

    let randomValue = (Math.random() * 100).toFixed(0)

    if (randomValue <= 33) {
        return ("rock");
    }
    else if (randomValue <= 66) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
    //Looks like "return" can only be used
    //once, why's that?

    //Also about arrow and anonymous functions
}


//COMPARE CHOICES AND DISPLAY RESULT
function checkResult(human, computer) {

    if (human === computer) {
        result.style.fontSize = '25px';
        result.textContent = "Tie!";
    }


    //PLAYER IS ROCK
    else if (human + computer === "rockscissors") {
        result.textContent = "ROCK beats SCISSORS! \nYou get a point!";
        result.style.fontSize = '15px';
        playerScore++
    }
    else if (human + computer === "rockpaper") {
        result.textContent = "PAPER beats ROCK! \nComputer gets a point."
        result.style.fontSize = '15px';
        computerScore++
    }

    //PLAYER IS PAPER
    else if (human + computer === "paperrock") {
        result.textContent = "PAPER beats ROCK! \nYou get a point!"
        result.style.fontSize = '15px';
        playerScore++
    }
    else if (human + computer === "paperscissors") {
        result.textContent = "SCISSORS beats PAPER! \nComputer gets a point."
        result.style.fontSize = '15px';
        computerScore++
    }

    //PLAYER IS SCISSORS
    else if (human + computer === "scissorspaper") {
        result.textContent = "SCISSORS beats PAPER! \nYou get a point!"
        result.style.fontSize = '15px';
        playerScore++
    }
    else if (human + computer === "scissorsrock") {
        result.textContent = "ROCK beats SCISSORS! \nComputer gets a point."
        result.style.fontSize = '15px';
        computerScore++
    }
    //++roundCount (no more roundCount variable)

}