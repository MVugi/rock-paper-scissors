//Meine erste Version, ohne die Schritte des Assingments genau zu beachten

//Generates computer Choice
function getComputerChoice() {
  let computerChoice;
  let x = Math.random();
  if (x < 0.33) {
    computerChoice = "Rock";
  } else if (x > 0.66) {
    computerChoice = "Scissors";
  } else {
    computerChoice = "Paper";
  }
  return computerChoice;
}

//Format input to upper/lower case
function formatSelection(playerSelection) {
  let formatedPlayerSelection = playerSelection.toLowerCase();
  let upperText = formatedPlayerSelection.substring(0, 1);
  upperText = upperText.toUpperCase();
  let lowerText = formatedPlayerSelection.substr(1);
  formatedPlayerSelection = upperText + lowerText;
  return formatedPlayerSelection;
}

//Check if Player Input is either Rock, Paper or Scissors
function checkValidity(input) {
  let validChoice = false;
  input = formatSelection(input);
  console.log(input);
  if (input === "Rock" || input === "Paper" || input === "Scissors") {
    validChoice = true;
  }
  return validChoice;
}

//Compare player and computer choice
function compareChoices(playerSelection, computerChoice) {
  let computer = getComputerChoice();
  //DRAW conditions
  let gameResult;
  console.log("Aus compare function: beide picks gleich?" + "\n dein pick: " + playerSelection + "\n comp pick: " + computer + "\n erg: " + (playerSelection === computer));
  if (playerSelection === computer) {
    console.log("Draw erfuellt");
    gameResult = 0;
  }
  //WIN conditions
  else if (
    ((playerSelection === "Rock") && (computer === "Scissors")) ||
    ((playerSelection === "Paper") && (computer === "Rock")) ||
    ((playerSelection === "Scissors") && (computer === "Paper"))
  ) {
    console.log("Win erfuellt");
    gameResult = 1;
  //LOSE conditions  
  } else {
    console.log("Lose erfuellt");
    gameResult = -1;
  }
  //Kontrolle - Values von player, comp und result
  console.log("Du: " + playerSelection);
  console.log("Comp: " + computer);
  console.log(gameResult);
  
  displayResult(gameResult);
  //gamecounter += 1;
  return gameResult;
}

//display win/draw/lose
function displayResult(gameResult){
  if (gameResult === 0){
    alert ("Draw!"); //implement "new-game" function
  } else if (gameResult === 1){
    alert ("You won!"); //implement "`${playerSelection}`beats `${computerChoice}`"
  } else {
    alert ("You lost!");
  }
}

function playGame(playerSelection, computerChoice) {

  let input = prompt ("Enter your Choice! (Rock, Paper or Scissors)");

  console.log(checkValidity(input));

  if (checkValidity(input)){
    console.log("checkValidity ist true - fuehre compare aus")
    input = formatSelection(input);
    console.log("Formatierte Eingabe vor Vergleich: " + input);
    compareChoices(input);
    //displayResult(); FRAGE -> wie kann ich die funktion hier nutzen mit "gameResult" variable aus compareChoices() Ausgabe?
    //jetzt führe ich displayResult() INNERHAlB von compareChoices() aus, damit ich "gameResult" direkt nutzen kann
  } else {
    alert ("Invalid Input! Game canceled");
  }
  let gameResult;
}

playGame();
let gameCounter = 0;
