let playerSelection;
let computerSelection;
let gameCounter = 0;
let winCounter = 0;
let loseCounter = 0;

const playerImage = document.querySelector("#player-image");
const playerBorder = document.querySelector("#player-image-container");
const computerImage = document.querySelector("#computer-image");
const computerBorder = document.querySelector("#computer-image-container");

const resultBox = document.querySelector(".result-box");
const resultBoxSub = document.createElement("p");

const winBox = document.querySelector(".win-box");
const loseBox = document.querySelector(".lose-box");
const counterBox = document.querySelector(".counter-box");

const historyList = document.querySelector("#history");

let resetGame = function () {
  gameCounter = 0;
  winCounter = 0;
  loseCounter = 0;
  playerImage.src = "./images/you.png";
  computerImage.src = "./images/computer.png";
};

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

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  playerSelection = rockButton.getAttribute("id");
  playRound(playerSelection, computerSelection);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  playerSelection = paperButton.getAttribute("id");
  playRound(playerSelection, computerSelection);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  playerSelection = scissorsButton.getAttribute("id");
  playRound(playerSelection, computerSelection);
});

/* Plays Round: 
gets player's choice from button - computer's from getComputerChoice()
sets image sources according to picks
compares choices and sets border colors accordingly
increments counters for: wins,losses,rounds
returns results and adds new line to result-list */

function playRound(playerSelection, computerSelection) {
  while (winCounter < 5 && loseCounter < 5) {
    let roundResult;
    resultBoxSub.innerHTML = "";
    computerSelection = getComputerChoice();
    playerImage.src = `./images/${playerSelection}.png`;
    computerImage.src = `./images/${computerSelection}.png`;

    if (playerSelection === computerSelection) {
      roundResult = "Draw!";
      resultBox.innerHTML = "DRAW!";
      resultBoxSub.innerHTML = "";
      playerBorder.style.borderColor = "orange";
      computerBorder.style.borderColor = "orange";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerBorder.style.borderColor = "green";
      computerBorder.style.borderColor = "red";
      winCounter++;
      resultBox.textContent = "Round won!";
      resultBoxSub.textContent = `Your ${playerSelection} beats ${computerSelection}`;
      roundResult =
        "You won! " + playerSelection + " beats " + computerSelection + "!";
    } else {
      playerBorder.style.borderColor = "red";
      computerBorder.style.borderColor = "green";
      loseCounter++;
      resultBox.textContent = "Round lost!";
      resultBoxSub.textContent = `The computer's ${computerSelection} beats your ${playerSelection}`;
      roundResult =
        "You lost! " + computerSelection + " beats " + playerSelection + "!";
    }
    gameCounter++;
    resultBox.appendChild(resultBoxSub);
    winBox.innerHTML = `WON: ${winCounter}`;
    loseBox.innerHTML = `LOST: ${loseCounter}`;
    counterBox.innerHTML = `Games played: ${gameCounter}`;
    const historyItem = document.createElement("li");
    historyItem.textContent = roundResult;

    //reverse order of list in css to always show newest round result on top
    historyList.appendChild(historyItem);
    return roundResult;
  }
  if (winCounter === 5) {
    window.alert("You Won! Hit confirm to play again...");
  } else if (loseCounter === 5) {
    window.alert("You lost! Hit confirm to try again...");
  }
  resetGame();
  winBox.innerHTML = `WON: ${winCounter}`;
  loseBox.innerHTML = `LOST: ${loseCounter}`;
  counterBox.innerHTML = `Games played: ${gameCounter}`;
}
