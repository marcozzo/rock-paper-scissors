let humanScore = 0;
let computerScore = 0;


function playRound() {
    return getComputerChoice(getNumber())
 }

function getNumber() {
    let value = (Math.random() * 100).toFixed(0)
    return value
}

function getComputerChoice(randomNumber) {

     
    if (randomNumber <= 33) {
        return ("Rock");
    }
    else if (randomNumber <= 66) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
    //Looks like "return" can only be used
    //once, why's that?

    //Also about arrow and anonymous functions
}