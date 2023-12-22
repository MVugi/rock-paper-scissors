function getComputerChoice() {
  let computerChoice;
  let x = Math.random();
  if (x < 0.33) {
    computerChoice = "rock";
  } else if (x > 0.66) {
    computerChoice = "scissors";
  } else {
    computerChoice = "paper";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let roundResult;
  if (!(playerSelection === computerSelection)) {
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        winCounter++;
        roundResult =
          "You won! " + playerSelection + " beats " + computerSelection + "!";
      } else {
        roundResult =
          "You lost! " + computerSelection + " beats " + playerSelection + "!";
        loseCounter++;
      }
      gameCounter++;
    }
  } else {
    roundResult = "Invalid Input or Draw";
  }
  console.log("Gamecounter: " + gameCounter);
  console.log("Wincounter: " + winCounter + "\n Losecounter: " + loseCounter);
  return roundResult;
}

let playerSelection;
let computerSelection;
let gameCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let bestOfFive = true;

while (bestOfFive) {
  playerSelection = prompt("Enter your choice: ");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
    if (winCounter === 3){
        alert (`You won the best-of-3 game! \nFinal score: ${winCounter}` + " : " + loseCounter);
        bestOfFive = false;
    } else if (loseCounter === 3) {
        alert (`You lost the best-of-3 game! \nFinal score: ${loseCounter}` + " : " + winCounter);
        bestOfFive = false;
    }
}
