console.log("Hey! Welcome to this console-based Rock, Paper Scissors game!")

function getComputerChoice () {
  let randomN = Math.random() * 100;
  console.log(randomN);

  if (randomN <= 33) {
    return "Rock"
  } else if (randomN <= 66) {
    return "Paper"
  } else {
    return "Scissors"
  }
}
