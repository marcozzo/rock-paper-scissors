let humanScore = 0;
let computerScore = 0;
let roundCount = 1;


const playRound = function () {

    //INCREMENT ROUNDS ONLY IF HUMAN INPUT IS VALID
    while (roundCount <= 5) {

        let humanChoice = prompt("Rock | Paper | Scissors");

        if (typeof humanChoice === "string" &&
            (humanChoice === 'rock' ||
                humanChoice === 'paper' ||
                humanChoice === 'scissors')) {

            checkResult(humanChoice, getComputerChoice())
        }
    }

    roundCount = 1;

    if (humanScore === computerScore) {
        humanScore = 0;
        computerScore = 0;
        return "The game is a tie!"
    }
    else if (humanScore > computerScore) {
        humanScore = 0;
        computerScore = 0;
        return "Congratulations! You won the game."
    }
    else {
        humanScore = 0;
        computerScore = 0;
        return "You lost the game."
    }


}

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

function checkResult(human, computer) {

    const HUMAN = "color: cyan"
    const COMPUTER = "color: red"

    let result;

    console.log(human + computer)

    if (human === computer) {
        console.log("Tie.");
    }


    //PLAYER IS ROCK
    else if (human + computer === "rockscissors") {
        result = "win"
        console.log("ROCK beats SCISSORS! \nYou get a point!")
    }
    else if (human + computer === "rockpaper") {
        result = "lose"
        console.log("PAPER beats ROCK! \nComputer gets a point.")
    }

    //PLAYER IS PAPER
    else if (human + computer === "paperrock") {
        result = "win"
        console.log("PAPER beats ROCK! \nYou get a point!")
    }
    else if (human + computer === "paperscissors") {
        result = "lose"
        console.log("SCISSORS beats PAPER! \nComputer gets a point.")
    }

    //PLAYER IS SCISSORS
    else if (human + computer === "scissorspaper") {
        result = "win"
        console.log("SCISSORS beats PAPER! \nYou get a point!")
    }
    else if (human + computer === "scissorsrock") {
        result = "lose"
        console.log("ROCK beats SCISSORS! \nComputer gets a point.")
    }
    ++roundCount


    /////TEST FOR VICTORY/DEFEAT
    if (result === "win") {
        ++humanScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }

    console.log("%cPLAYER: " + humanScore, HUMAN);
    console.log("%cCOMPUTER: " + computerScore, COMPUTER);

}